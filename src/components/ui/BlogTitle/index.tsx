import React from 'react';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * 表示するタイトル の指定
   */
  title: string;
} & CommonProps;

const BlogTitle: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div {...commonClass(props)}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default BlogTitle;
