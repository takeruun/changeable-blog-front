import type { NextPage, GetStaticProps } from 'next';
import { client } from 'src/lib/apollo-client';
import BaseLayout from 'src/components/layouts/BaseLayout';
import HomepageContainer from 'src/components/pages/HomePage';
import {
  BlogList,
  RecommendBlogListDocument,
  RecommendBlogListQuery
} from '@generated/graphql';

type Props = {
  blogList: BlogList[];
};

const HomePage: NextPage<Props> = (props: Props) => {
  const { blogList } = props;

  return (
    <BaseLayout>
      <HomepageContainer blogItems={blogList} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query<RecommendBlogListQuery>({
    query: RecommendBlogListDocument
  });

  return {
    props: {
      blogList: data.recommendBlogList.nodes
    }
  };
};

export default HomePage;
