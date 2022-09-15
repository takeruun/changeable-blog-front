import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useTopPage } from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('useTopPage', () => {
  describe('handleToBlogPage', () => {
    test('ブログページへ遷移できる', () => {
      const push = jest.fn();
      (useRouter as jest.Mock).mockImplementation(() => ({ push }));

      const { result } = renderHook(() => useTopPage());
      const blogId = 'blogId';

      act(() => {
        result.current.handleToBlogPage(blogId);
      });

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith(`/b/${blogId}`);
    });
  });
});
