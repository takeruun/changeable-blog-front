import * as cheerio from 'cheerio';
import type { NextPage, GetServerSideProps } from 'next';
import BaseLayout from 'src/components/layouts/BaseLayout';
import { client } from 'src/lib/apollo-client';
import {
  NormalBlogQuery,
  NormalBlogDocument,
  NormalBlog
} from '@generated/graphql';
import BlogPageContainer from 'src/components/pages/BlogPage';

type Props = {
  normalBlog: NormalBlog;
  toc: Array<{
    id: string;
    text: string;
    name: string;
  }>;
};

const Blog: NextPage<Props> = (props) => {
  const { normalBlog, toc } = props;

  return (
    <BaseLayout>
      <BlogPageContainer blog={normalBlog} toc={toc} />
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.blogId;

  const { data } = await client.query<NormalBlogQuery>({
    query: NormalBlogDocument,
    variables: { id }
  });

  const $ = cheerio.load(data.normalBlog.body);
  const headings = $('h1, h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: $(data.children[0]).text(),
    id: data.attribs.id,
    name: data.name
  }));

  return {
    props: {
      normalBlog: data.normalBlog,
      toc
    }
  };
};

export default Blog;
