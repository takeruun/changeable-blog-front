import React, { useCallback } from 'react';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  children: React.ReactNode;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
} & CommonProps;

const FlexBox: React.FC<Props> = (props) => {
  const { children, alignItems, justifyContent } = props;

  return (
    <div
      {...commonClass(props)}
      style={{ display: 'flex', alignItems, justifyContent }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
