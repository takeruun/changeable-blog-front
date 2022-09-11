import Profile from './Profile';
import Archive from './Archive';
import styles from './styles.module.scss';
import { useAside } from './hooks';
import SearchField from '@ui/SearchField';

const Aside: React.FC = () => {
  const { query, handleChnageQuery } = useAside();

  return (
    <aside>
      <div className={styles.search}>
        <SearchField
          value={query}
          onChange={(e) => handleChnageQuery(e.target.value)}
        />
      </div>
      <div className={styles.profile}>
        <Profile name={'橋本文瑠'} engName={'Takeru Hashimoto'} />
      </div>
      <div className={styles.archive}>
        <Archive />
      </div>
    </aside>
  );
};

export default Aside;
