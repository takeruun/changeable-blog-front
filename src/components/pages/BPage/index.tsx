import styles from './styles.module.scss';
import { useBPageState } from './hooks';
import BlogItem from '@ui/BlogItem';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import { BlogList } from '@generated/graphql';
import Pagination from '@ui/Pagination';

type Props = {
  blogItems: BlogList[];
  currentPage: number;
  totalCount: number;
};

const BPageContainer: React.FC<Props> = (props) => {
  const { handlePageChange } = useBPageState();
  const { blogItems, currentPage, totalCount } = props;
  const totalPageNumber = Math.ceil(totalCount / 5);

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
          currentPage={currentPage}
          totalPageNumber={totalPageNumber}
          onPageChange={handlePageChange}
        />
      </div>
    </PostPageLayout>
  );
};

export default BPageContainer;
