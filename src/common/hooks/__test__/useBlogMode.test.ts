import { renderHook } from '@testing-library/react';
import { useBlogMode } from '../useBlogMode';
import { useGetWindowSize } from 'src/common/hooks/useGetWindowSize';

jest.mock('src/common/hooks/useGetWindowSize', () => ({
  useGetWindowSize: jest.fn()
}));

const mockUseGetWindowSize = ({
  windowSize
}: {
  windowSize: { width: number; height: number };
}) => {
  (useGetWindowSize as jest.Mock).mockImplementation(() => ({
    windowSize
  }));
};

let mockWindowSize: { windowSize: { width: number; height: number } } = {
  windowSize: {
    width: 700,
    height: 300
  }
};

beforeEach(() => {
  mockUseGetWindowSize(mockWindowSize);
});

const render = () => {
  const { result } = renderHook(() => useBlogMode(mockWindowSize));

  return { result };
};

describe('useBlogMode', () => {
  test('initialState', () => {
    const { result } = render();

    expect(result.current.blogMode).toEqual('normal');
  });

  test('window width が 480px 以下のとき、blogMode は mobile になる', () => {
    mockWindowSize = { windowSize: { width: 400, height: 300 } };
    const { result } = render();

    expect(result.current.blogMode).toEqual('mobile');
  });

  test('現在時刻が 5時00分 以内のとき、blogMode は night になる', () => {
    mockWindowSize = {
      windowSize: {
        width: 700,
        height: 300
      }
    };
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01 4:59:00'));
    const { result } = render();

    expect(result.current.blogMode).toEqual('night');
  });

  test('現在時刻が 19時59分 以上のとき、blogMode は night になる', () => {
    mockWindowSize = {
      windowSize: {
        width: 700,
        height: 300
      }
    };
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01 20:00:00'));
    const { result } = render();

    expect(result.current.blogMode).toEqual('night');
  });
});
