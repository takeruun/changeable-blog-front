import Image from 'next/image';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * Blog Id
   */
  id: string;
  /**
   * Blog タイトル
   */
  title: string;
  /**
   * Blog タグ
   */
  tags: string[];
  /**
   * Blog 投稿日時
   */
  date: string;
  /**
   * Blog サムネ画像URL
   */
  imagePath?: string;
} & CommonProps;

const BlogItem: React.FC<Props> = (props: Props) => {
  const { id, title, tags, date, imagePath } = props;

  return (
    <div {...commonClass(props)}>
      <div className={styles.container}>
        <div className={styles.image__content}>
          <Image
            className={styles.image}
            src={imagePath ?? '/sample_thumbnail.png'}
            layout='fill'
            objectFit='contain'
            alt={`${id}の画像`}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <div className={styles.sub__content}>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={`tag-${tag}`} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.date}>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
