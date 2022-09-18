import Link from 'next/link';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  tableOfContents: Array<{
    id: string;
    text: string;
    name: string;
  }>;
} & CommonProps;

const TableOfContents: React.FC<Props> = (props) => {
  const { tableOfContents } = props;

  return (
    <div {...commonClass(props)}>
      {tableOfContents.length > 0 && (
        <div className={styles.container}>
          <h4>目次</h4>
          <ul className={styles.lists} id='lists'>
            {tableOfContents.map((toc) => {
              const listStyle =
                toc.name === 'h1' ? styles.list__h1 : styles.list__h2;

              return (
                <li className={listStyle} id={'list ' + toc.name} key={toc.id}>
                  <Link href={'#' + toc.id}>{toc.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
