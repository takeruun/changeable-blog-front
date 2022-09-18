import { act, renderHook, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { useRouter } from 'next/router';
import { useBlogPage } from '..';
import { useGetWindowSize } from 'src/common/hooks/useGetWindowSize';
import {
  NormalBlogDocument,
  NightBlogDocument,
  Blog
} from '@generated/graphql';
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
let mockWindowSize: { windowSize: { width: number; height: number } } = {
  windowSize: {
    width: 700,
    height: 300
  }
};
let mockBlogMode: 'normal' | 'night' | 'mobile' = 'normal';

beforeEach(() => {
  mockUseRouter(mockRouter);
  mockUseGetWindowSize(mockWindowSize);
  mockUseBlogMode(mockBlogMode);
});

describe('useBlogPage', () => {
  test('initialState', () => {
    const { result } = render([]);

    expect(result.current.blog).toBeUndefined();
    expect(result.current.toc).toEqual([]);
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
  });

  describe('normalBlog', () => {
    test('[正常] blog内容を取得できる', async () => {
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
                updateAt: '2022-01-12'
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

    test('[異常] blog なしだと"not found"エラーが取得できる', async () => {
      mockRouter = { isReady: true, query: { blogId: '1222' } };
      const mocks = [
        {
          request: {
            query: NormalBlogDocument,
            variables: {
              id: 1
            }
          },
          error: new Error('Error record not found')
        }
      ];

      const { result } = render(mocks);

      await waitFor(() => {
        expect(result.current.loading).toBeFalsy();
        expect(result.current.error?.message).toEqual('Error record not found');
      });
    });
  });
});
