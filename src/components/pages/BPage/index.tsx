import styles from './styles.module.scss';
import BlogItem from '@ui/BlogItem';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import { BlogList } from '@generated/graphql';
import Pagination from '@ui/Pagination';

type Props = {
  blogItems: BlogList[];
};

const BPageContainer: React.FC<Props> = (props) => {
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
          date={'2022年'}
        />
      ))}
      <div className={styles.pagination}>
        <Pagination
          currentPage={1}
          totalPageNumber={3}
          onPageChange={() => ({})}
        />
      </div>
    </PostPageLayout>
  );
};

export default BPageContainer;
