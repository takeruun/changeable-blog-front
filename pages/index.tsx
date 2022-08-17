import type { NextPage } from 'next';
import BaseLayout from 'src/components/layouts/BaseLayout';
import HomepageContainer from 'src/components/pages/HomePage';

const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      <HomepageContainer />
    </BaseLayout>
  );
};

export default HomePage;
