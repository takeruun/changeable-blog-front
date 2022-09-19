import { renderHook, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { useRouter } from 'next/router';
import { useBlogPage } from '..';
import { NormalBlogDocument, NightBlogDocument } from '@generated/graphql';
import { useGetWindowSize } from 'src/common/hooks/useGetWindowSize';
import { useBlogMode } from 'src/common/hooks/useBlogMode';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

jest.mock('src/common/hooks/useGetWindowSize', () => ({
  useGetWindowSize: jest.fn()
}));

jest.mock('src/common/hooks/useBlogMode', () => ({
  useBlogMode: jest.fn()
}));

const mockUseRouter = ({
  isReady,
  query
}: {
  isReady: boolean;
  query?: { blogId: string };
}) => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    isReady,
    query
  }));
};

const mockUseGetWindowSize = ({
  windowSize
}: {
  windowSize: { width: number; height: number };
}) => {
  (useGetWindowSize as jest.Mock).mockImplementation(() => ({
    windowSize
  }));
};

const mockUseBlogMode = (blogMode: string) => {
  (useBlogMode as jest.Mock).mockImplementation(() => ({
    blogMode
  }));
};

const render = (mocks: ReadonlyArray<MockedResponse>) => {
  const { result } = renderHook(() => useBlogPage(), {
    wrapper: ({ children }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )
  });

  return { result };
};

let mockRouter: {
  isReady: boolean;
  query?: {
    blogId: string;
  };
} = { isReady: true, query: { blogId: '1' } };

beforeEach(() => {
  mockUseRouter(mockRouter);
  mockUseGetWindowSize({
    windowSize: {
      width: 700,
      height: 300
    }
  });
  mockUseBlogMode('normal');
});
describe('useBlogPage', () => {
  test('initialState', () => {
    const { result } = render([]);

    expect(result.current.blog).toBeUndefined();
    expect(result.current.toc).toEqual([]);
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  describe('blogMode が normal のとき normalBlog が実行される', () => {
    describe('[正常]', () => {
      test('blog内容を取得できる', async () => {
        const mocks = [
          {
            request: {
              query: NormalBlogDocument,
              variables: {
                id: 1
              }
            },
            result: {
              data: {
                blog: {
                  id: 1,
                  body: '<h1 id="kkeox2">h1 タイトル</h1><h2 id="skcdme2">h2 タイトル</h2><p>wwww</p>',
                  createdAt: '2022-01-02',
                  description: 'description',
                  mobileBody: 'mobileBody',
                  nightBody: 'nightBody',
                  tags: ['tag'],
                  thumbnailImagePath: 'thumbnailImagePath',
                  title: 'title',
                  updatedAt: '2022-01-12'
                }
              }
            }
          }
        ];

        const { result } = render(mocks);

        await waitFor(() => {
          expect(result.current.loading).toBeFalsy();
          expect(result.current.blog?.body).toEqual(
            '<h1 id="kkeox2">h1 タイトル</h1><h2 id="skcdme2">h2 タイトル</h2><p>wwww</p>'
          );
          expect(result.current.toc).toEqual([
            { id: 'kkeox2', name: 'h1', text: 'h1 タイトル' },
            { id: 'skcdme2', name: 'h2', text: 'h2 タイトル' }
          ]);
        });
      });
    });

    describe('[異常]', () => {
      beforeEach(() => {
        mockUseRouter({ isReady: true, query: { blogId: '1222' } });
      });
      test('blog なしだと"not found"エラーが取得できる', async () => {
        const mocks = [
          {
            request: {
              query: NormalBlogDocument,
              variables: {
                id: 1222
              }
            },
            error: new Error('Error record not found')
          }
        ];

        const { result } = render(mocks);

        await waitFor(() => {
          expect(result.current.loading).toBeFalsy();
          expect(result.current.error?.message).toEqual(
            'Error record not found'
          );
        });
      });
    });
  });

  describe('blogMode が night のとき nightBlog が実行される', () => {
    beforeEach(() => {
      mockUseBlogMode('night');
    });

    describe('[正常]', () => {
      beforeEach(() => {
        mockUseRouter({ isReady: true, query: { blogId: '1' } });
      });
      test('blog内容を取得できる', async () => {
        const mocks = [
          {
            request: {
              query: NightBlogDocument,
              variables: {
                id: 1
              }
            },
            result: {
              data: {
                blog: {
                  id: 1,
                  body: '<h1 id="kkeox2">h1 タイトル</h1><h2 id="skcdme2">h2 タイトル</h2><p>wwww</p>',
                  createdAt: '2022-01-02',
                  description: 'description',
                  mobileBody: 'mobileBody',
                  nightBody:
                    '<h1 id="kkeox2">h1 night タイトル</h1><h2 id="skcdme2">h2 night タイトル</h2><p>wwww</p>',
                  tags: ['tag'],
                  thumbnailImagePath: 'thumbnailImagePath',
                  title: 'title',
                  updatedAt: '2022-01-12'
                }
              }
            }
          }
        ];

        const { result } = render(mocks);

        await waitFor(() => {
          expect(result.current.loading).toBeFalsy();
          expect(result.current.blog?.nightBody).toEqual(
            '<h1 id="kkeox2">h1 night タイトル</h1><h2 id="skcdme2">h2 night タイトル</h2><p>wwww</p>'
          );
          expect(result.current.toc).toEqual([
            { id: 'kkeox2', name: 'h1', text: 'h1 night タイトル' },
            { id: 'skcdme2', name: 'h2', text: 'h2 night タイトル' }
          ]);
        });
      });
    });

    describe('[異常]', () => {
      beforeEach(() => {
        mockUseRouter({ isReady: true, query: { blogId: '1222' } });
      });
      test('blog なしだと"not found"エラーが取得できる', async () => {
        const mocks = [
          {
            request: {
              query: NightBlogDocument,
              variables: {
                id: 1222
              }
            },
            error: new Error('Error record not found')
          }
        ];

        const { result } = render(mocks);

        await waitFor(() => {
          expect(result.current.loading).toBeFalsy();
          expect(result.current.error?.message).toEqual(
            'Error record not found'
          );
        });
      });
    });
  });
});
