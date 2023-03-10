import { act, renderHook } from '@testing-library/react';
import { useAside } from '..';

describe('useAside', () => {
  describe('initialState', () => {
    const { result } = renderHook(() => useAside());

    it('initial state', () => {
      expect(result.current.query).toEqual('');
    });
  });

  describe('handleChnageQuery', () => {
    test('query 変更できる', () => {
      const { result } = renderHook(() => useAside());
      const query = 'query';

      act(() => {
        result.current.handleChnageQuery(query);
      });

      expect(result.current.query).toEqual(query);
    });
  });
});
