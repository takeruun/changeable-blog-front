import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { client } from 'src/lib/apollo-client';
import BaseLayout from 'src/components/layouts/BaseLayout';
import BPageContainer from 'src/components/pages/BPage';
import { BlogList, BlogListDocument, BlogListQuery } from '@generated/graphql';

type Props = {
  blogList: BlogList[];
  currentPage: number;
  totalCount: number;
};

const BPage: NextPage<Props> = (props) => {
  const { blogList, currentPage, totalCount } = props;

  return (
    <BaseLayout>
      <BPageContainer
        blogItems={blogList}
        currentPage={currentPage}
        totalCount={totalCount}
      />
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<BlogListQuery>({
    query: BlogListDocument,
    variables: { pageNo: 1, limit: 5 }
  });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.blogList.pageInfo.totalCount / 5)).map(
    (repo) => `/b/page/${repo}`
  );

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id;

  const { data } = await client.query<BlogListQuery>({
    query: BlogListDocument,
    variables: { pageNo: id, limit: 5 }
  });

  return {
    props: {
      blogList: data.blogList.nodes,
      currentPage: Number(id),
      totalCount: data.blogList.pageInfo.totalCount
    }
  };
};

export default BPage;
