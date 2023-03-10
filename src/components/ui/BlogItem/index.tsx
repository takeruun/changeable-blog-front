import Image from 'next/image';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * Blog Id
   */
  id: string;
  /**
   * タイトル の指定
   */
  title: string;
  /**
   * タグ の指定
   */
  tags: string[];
  /**
   * 投稿日時 の指定
   */
  date: string;
  /**
   * サムネ画像URL の指定
   */
  imagePath?: string;
  /**
   * ブログ詳細ページへ遷移する実行関数 の指定
   */
  toBlogPage?: (id: string) => void;
} & CommonProps;

const BlogItem: React.FC<Props> = (props: Props) => {
  const { id, title, tags, date, imagePath, toBlogPage } = props;

  return (
    <div {...commonClass(props, styles.container)}>
      <div className={styles.image__content}>
        <Image
          className={styles.image}
          src={imagePath ?? '/sample_thumbnail.png'}
          layout='fill'
          objectFit='contain'
          alt={`${id}の画像`}
          onClick={() => {
            if (toBlogPage) toBlogPage(id);
          }}
        />
      </div>
      <div className={styles.content}>
        <h3
          onClick={() => {
            if (toBlogPage) toBlogPage(id);
          }}
        >
          {title}
        </h3>
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
  );
};

export default BlogItem;
