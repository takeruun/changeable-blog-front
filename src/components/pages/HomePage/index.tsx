import styles from './styles.module.scss';
import BlogItem from '@ui/BlogItem';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import { BlogList } from '@generated/graphql';

type Props = {
  blogItems: BlogList[];
};

const HomePageContainer: React.FC<Props> = (props) => {
  const { blogItems } = props;

  return (
    <PostPageLayout>
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
