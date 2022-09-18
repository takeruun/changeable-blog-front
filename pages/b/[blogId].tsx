import type { NextPage } from 'next';
import BaseLayout from 'src/components/layouts/BaseLayout';
import BlogPageContainer from 'src/components/pages/BlogPage';

const Blog: NextPage = () => {
  return (
    <BaseLayout>
      <BlogPageContainer />
    </BaseLayout>
  );
};

export default Blog;
