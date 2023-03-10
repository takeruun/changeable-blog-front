import Image from 'next/image';
import { AiFillTwitterSquare } from 'react-icons/ai';
import styles from './styles.module.scss';

type Props = {
  name: string;
  engName: string;
};

const Profile: React.FC<Props> = (props) => {
  const { name, engName } = props;

  return (
    <div className={styles.container}>
      <h6>プロフィール</h6>
      <div className={styles.bar} />
      <div className={styles.profile}>
        <div className={styles.profile__container}>
          <div className={styles.profile__image}>
            <Image
              src={'/avatar.jpg'}
              width='60px'
              height='60px'
              alt='プロフィール画像'
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.profile__body}>
            <p className={styles.profile__name}>{name}</p>
            <p className={styles.profile__eng__name}>{engName}</p>
            <div className={styles.sns}>
              <AiFillTwitterSquare size={25} className={styles.icon} />
              <AiFillTwitterSquare size={25} className={styles.icon} />
              <AiFillTwitterSquare size={25} className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
