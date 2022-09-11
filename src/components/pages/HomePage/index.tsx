import styles from './styles.module.scss';
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
        />
      ))}
    </PostPageLayout>
  );
};

export default HomePageContainer;
