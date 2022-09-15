import { act, renderHook } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useBPage } from '..';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('useBPage', () => {
  describe('handlePageChange', () => {
    test('ページ遷移できる', () => {
      const push = jest.fn();
      (useRouter as jest.Mock).mockImplementation(() => ({ push }));

      const { result } = renderHook(() => useBPage());
      const page = 1;

      act(() => {
        result.current.handlePageChange(page);
      });

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith(`/b/page/${page}`);
    });
  });

  describe('handleToBlogPage', () => {
    test('ブログページへ遷移できる', () => {
      const push = jest.fn();
      (useRouter as jest.Mock).mockImplementation(() => ({ push }));

      const { result } = renderHook(() => useBPage());
      const blogId = 'blogId';

      act(() => {
        result.current.handleToBlogPage(blogId);
      });

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith(`/b/${blogId}`);
    });
  });
});
