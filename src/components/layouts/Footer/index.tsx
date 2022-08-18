import Link from 'next/link';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.main}>
          <Link href={'/'}>
            <div className={styles.left__logo}>
              <h1>変幻自在ブログ</h1>
              <p>時と場合でかわるブログ</p>
            </div>
          </Link>

          <nav className={styles.nav}>
            <h4>サイトについて</h4>
            <ul>
              <li>about</li>
            </ul>
          </nav>
          <nav className={styles.nav}>
            <h4>運営</h4>
            <ul>
              <li>利用規約</li>
              <li>プライバシーポリシー</li>
            </ul>
          </nav>
          <nav className={styles.nav}>
            <h4>SNS</h4>
            <ul>
              <li>github</li>
              <li>twitter</li>
              <li>instagram</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
