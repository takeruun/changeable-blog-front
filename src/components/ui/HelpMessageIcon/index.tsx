import React, { useCallback } from 'react';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * 吹き出しで表示されるメッセージ の指定
   */
  message: string;
} & CommonProps;

const HelpMessageIcon: React.FC<Props> = (props) => {
  const { message } = props;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleSetOpen = useCallback(() => setOpen((prev) => !prev), []);

  React.useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div {...commonClass(props)}>
      <div className={styles.help__message} ref={ref}>
        {open && (
          <div className={styles.message__container}>
            <div className={styles.message}>{message}</div>
          </div>
        )}
        <button className={styles.help__icon} onClick={handleSetOpen}>
          ?
        </button>
      </div>
    </div>
  );
};

export default HelpMessageIcon;
