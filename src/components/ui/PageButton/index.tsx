import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  children?: React.ReactNode;

  // 選択されているかどうか
  current: boolean;

  onClick?: React.MouseEventHandler;
} & CommonProps;

const PageButton: React.FC<Props> = (props) => {
  const { children, current, onClick } = props;

  return (
    <button
      {...commonClass(
        props,
        current ? styles.page_button__current : styles.page_button
      )}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
};

export default PageButton;
