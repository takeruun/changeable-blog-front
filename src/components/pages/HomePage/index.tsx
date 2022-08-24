import BlogItem from '@ui/BlogItem';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import { BlogType } from 'src/types/Blog';
import styles from './styles.module.scss';

type Props = {
  blogItems: Array<BlogType>;
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
          tags={blogItem.tags.map((tag) => tag.name)}
          date={'2022年'}
        />
      ))}
    </PostPageLayout>
  );
};

export default HomePageContainer;
