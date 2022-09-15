import { render, screen } from '@testing-library/react';
import Aside from 'src/components/layouts/Aside';

describe('Aside', () => {
  it('render Aside', () => {
    render(<Aside />);

    expect(screen.getByText('プロフィール'));
    expect(screen.getByText('アーカイブ'));
  });
});
