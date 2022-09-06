import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  // アイコン (react-icons)
  IconComponent: React.ElementType<any>;

  // aria-label
  label?: string;

  // input type
  type?: 'button' | 'submit';
} & CommonProps;

const IconButton: React.FC<Props> = (props) => {
  const { IconComponent, type, label } = props;

  return (
    <button
      {...commonClass(props, styles.icon_button)}
      type={type}
      aria-label={label}
    >
      <IconComponent className={styles.icon} />
    </button>
  );
};

export default IconButton;
