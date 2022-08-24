import type { NextPage } from 'next';
import BaseLayout from 'src/components/layouts/BaseLayout';
import HomepageContainer from 'src/components/pages/HomePage';

const HomePage: NextPage = () => {
  return (
    <BaseLayout>
      <HomepageContainer
        blogItems={[
          {
            id: '1',
            title: 'sample',
            description: '',
            body: '',
            imagePath: '',
            tags: [{ id: '1', name: 'tag1', createdAt: '', updatedAt: '' }],
            createdAt: '',
            updatedAt: ''
          }
        ]}
      />
    </BaseLayout>
  );
};

export default HomePage;
