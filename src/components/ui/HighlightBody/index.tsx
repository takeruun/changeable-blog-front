import React from 'react';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * 表示するコンテンツ の指定
   */
  body: string;
} & CommonProps;

const HighlightBody: React.FC<Props> = (props) => {
  const { body } = props;

  return (
    <div {...commonClass(props)}>
      <div
        className={styles.contents}
        dangerouslySetInnerHTML={{
          __html: body
        }}
      />
    </div>
  );
};

export default HighlightBody;
