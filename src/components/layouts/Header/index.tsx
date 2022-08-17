import Link from 'next/link';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <header>
          <div className={styles.header__bar} />
          <div className={styles.main}>
            <Link href={'/'}>
              <div className={styles.left__content}>
                <h1>変幻自在ブログ</h1>
                <p>時と場合でかわるブログ</p>
              </div>
            </Link>

            <div className={styles.right__content}>
              <Link href={'/top'}>
                <h2>ホーム</h2>
              </Link>
              <Link href={'/top'}>
                <h2>このブログについて</h2>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
