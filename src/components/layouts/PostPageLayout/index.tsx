import Aside from 'src/components/layouts/Aside';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

const PostPageLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.article}>{children}</div>
      <div className={styles.aside}>
        <Aside />
      </div>
    </div>
  );
};

export default PostPageLayout;
