import { renderHook } from '@testing-library/react';
import { useGetWindowSize } from '../useGetWindowSize';

describe('useGetWindowSize', () => {
  global.innerWidth = 500;
  global.innerHeight = 500;

  global.dispatchEvent(new Event('DOMContentLoaded'));
  const { result } = renderHook(() => useGetWindowSize());

  test('window size width:500px, height:500px のとき', () => {
    expect(result.current.windowSize.width).toEqual(500);
    expect(result.current.windowSize.height).toEqual(500);
  });
});
