import Link from 'next/link';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__bar} />
          <div className={styles.main}>
            <Link href={'/'}>
              <div className={styles.left__content}>
                <h1>変幻自在ブログ</h1>
              </div>
            </Link>

            <div className={styles.right__content}>
              <Link href={'/'}>
                <h2>ホーム</h2>
              </Link>
              <Link href={'/about'}>
                <h2>このブログについて</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
