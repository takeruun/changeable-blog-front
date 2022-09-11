import { render, screen, renderHook } from '@testing-library/react';
import { useAside } from '../hooks';
import Aside from 'src/components/layouts/Aside';

describe('Aside', () => {
  it('render Aside', () => {
    render(<Aside />);

    expect(screen.getByText('プロフィール'));
    expect(screen.getByText('アーカイブ'));
  });

  describe('useAside', () => {
    const { result } = renderHook(() => useAside());

    it('initial state', () => {
      expect(result.current.query).toEqual('');
    });
  });
});
