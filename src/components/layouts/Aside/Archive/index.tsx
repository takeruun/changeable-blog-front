import Link from 'next/link';
import styles from './styles.module.scss';

const Archive: React.FC = () => {
  const archives = [
    {
      linkDate: '2022-01',
      date: '2022年1月'
    },
    {
      linkDate: '2022-02',
      date: '2022年2月'
    }
  ];

  return (
    <div className={styles.container}>
      <h6>アーカイブ</h6>
      <div className={styles.bar} />
      {archives.map((archive, i) => (
        <li className={styles.archive} key={`archive-${i}`}>
          <Link href={'/'}>
            <span>&gt;&nbsp;&nbsp;{archive.date}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Archive;
