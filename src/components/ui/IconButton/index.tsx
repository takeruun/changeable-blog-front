import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * 表示する アイコン (react-icons) の指定
   */
  IconComponent: React.ElementType<any>;

  /**
   *  aria-label の指定
   */
  label?: string;

  // input type の指定
  type: 'button' | 'submit';

  // disabled にするかどうかの指定
  disabled?: boolean;
} & CommonProps;

const IconButton: React.FC<Props> = (props) => {
  const { IconComponent, type, label, disabled } = props;

  return (
    <button
      {...commonClass(props, styles.icon_button)}
      type={type}
      disabled={disabled}
      aria-label={label}
    >
      <IconComponent className={styles.icon} />
    </button>
  );
};

export default IconButton;
