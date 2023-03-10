import { setupServer } from 'msw/node';
import { graphql } from 'msw';
import {
  BlogListDocument,
  RecommendBlogListDocument
} from '@generated/graphql';

export const server = setupServer(
  graphql.query(RecommendBlogListDocument, (req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        recommendBlogList: {
          input,
          nodes: [
            {
              id: '1',
              title: 'ブログタイトル',
              tags: [],
              thumbnailImagePath: ''
            }
          ]
        }
      })
    );
  }),
  graphql.query(BlogListDocument, (req, res, ctx) => {
    const { input } = req.variables;
    return res(
      ctx.data({
        blogList: {
          input,
          nodes: [
            {
              id: '1',
              title: 'ブログタイトル',
              tags: [],
              thumbnailImagePath: ''
            }
          ],
          pageInfo: {
            totalCount: 1
          }
        }
      })
    );
  })
);
