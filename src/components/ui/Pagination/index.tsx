import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';
import IconButton from '@ui/IconButton';
import PageButton from '@ui/PageButton';

export type Props = {
  /**
   * 現在ページ の指定
   */
  currentPage: number;
  /**
   * 全部で何ページか
   */
  totalPageNumber: number;
  /**
   * ページ変更関数
   */
  onPageChange: (page: number) => void;
} & CommonProps;

const Pagination: React.FC<Props> = (props) => {
  const { currentPage, totalPageNumber, onPageChange } = props;
  const pages: Array<number> = [];
  for (let i = 0; i < totalPageNumber; i++) pages.push(i + 1);

  return (
    <div {...commonClass(props)} role='navigation'>
      <IconButton
        type={'button'}
        mr={1}
        IconComponent={GoChevronLeft}
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
        disabled={currentPage == 1}
      />
      {pages.map((page, i) => {
        return (
          <PageButton
            key={`page-${page}`}
            current={page == currentPage}
            mr={1}
            onClick={() => {
              if (page != currentPage) onPageChange(page);
            }}
          >
            {page}
          </PageButton>
        );
      })}
      <IconButton
        type={'button'}
        IconComponent={GoChevronRight}
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage == totalPageNumber}
      />
    </div>
  );
};

export default Pagination;
