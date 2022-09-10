import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * セクションのタイトル の指定
   *
   */
  title: string;

  /**
   * text-align の指定
   */
  textAlign?: 'left' | 'center' | 'right';
} & CommonProps;

const SectionTitle: React.FC<Props> = (props) => {
  const { title, textAlign } = props;

  return (
    <div {...commonClass(props)}>
      <div className={styles.section__title}>
        <h3 style={{ textAlign }}>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
