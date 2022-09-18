import Link from 'next/link';
import styles from './styles.module.scss';
import { useTopPage } from './hooks';
import SectionTitle from '@ui/SectionTitle';
import BlogItem from '@ui/BlogItem';
import FlexBox from '@ui/FlexBox';
import HelpMessageIcon from '@ui/HelpMessageIcon';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import { BlogList } from '@generated/graphql';

type Props = {
  blogItems: BlogList[];
};

const HomePageContainer: React.FC<Props> = (props) => {
  const { blogItems } = props;
  const { handleToBlogPage } = useTopPage();

  return (
    <PostPageLayout>
      <FlexBox alignItems='flex-end' mb={1}>
        <SectionTitle title='人気記事' />
        <HelpMessageIcon message='人気記事一覧' />
      </FlexBox>
      {blogItems.map((blogItem) => (
        <BlogItem
          id={blogItem.id}
          title={blogItem.title}
          key={blogItem.id}
          tags={blogItem.tags.map((tag) => tag)}
          mb={3}
          date={blogItem.createdAt}
          toBlogPage={handleToBlogPage}
        />
      ))}
      <FlexBox alignItems='flex-end' mt={2} mb={1}>
        <SectionTitle title='その他記事' />
        <HelpMessageIcon message='その他記事一覧' />
      </FlexBox>
      <div style={{ color: 'blue', textDecoration: 'underline' }}>
        <Link href={'/b/page/1'}>記事一覧</Link>
      </div>
    </PostPageLayout>
  );
};

export default HomePageContainer;
