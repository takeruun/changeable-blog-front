import Image from 'next/image';
import styles from './styles.module.scss';
import { useBlogPage } from './hooks';
import PostPageLayout from 'src/components/layouts/PostPageLayout';
import TableOfContents from '@ui/TableOfContents';
import BlogTitle from '@ui/BlogTitle';
import HighlightBody from '@ui/HighlightBody';

const BlogPageContainer: React.FC = () => {
  const { blog, toc } = useBlogPage();

  return (
    <PostPageLayout>
      {blog && (
        <div className={styles.container}>
          <BlogTitle title={blog.title} mb={1} />
          <div className={styles.tags}>
            {blog.tags.map((tag) => (
              <span key={`tag-${tag}`} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.date}>
            <div className={styles.date__create}>作成日：{blog.createdAt}</div>
            <div className={styles.date__update}>更新日：{blog.updatedAt}</div>
          </div>
          <div className={styles.image__content}>
            <Image
              className={styles.image}
              src={'/sample_thumbnail.png'}
              alt={`${blog.title}の画像`}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <TableOfContents tableOfContents={toc} />
          <HighlightBody body={blog.body} />
        </div>
      )}
    </PostPageLayout>
  );
};

export default BlogPageContainer;
