import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';
import IconButton from '@ui/IconButton';
import PageButton from '@ui/PageButton';

export type Props = {
  // 現在ページ
  currentPage: number;

  // 全部で何ページか
  totalPageNumber: number;

  onPageChange: (page: number) => void;
} & CommonProps;

const Pagination: React.FC<Props> = (props) => {
  const { currentPage, totalPageNumber } = props;
  const pages: number[] = [];
  for (let i = 0; i < totalPageNumber; i++) pages.push(i + 1);

  return (
    <div {...commonClass(props)} role='navigation'>
      {pages.map((page, i) => {
        if (pages.length > 1 && (i == 0 || pages.length - 1 == i)) {
          return i == 0 ? (
            <>
              <IconButton IconComponent={GoChevronLeft} />
              <PageButton current={page == currentPage} ml={1} mr={1}>
                {page}
              </PageButton>
            </>
          ) : (
            <>
              <PageButton current={page == currentPage} mr={1}>
                {page}
              </PageButton>
              <IconButton IconComponent={GoChevronRight} />
            </>
          );
        } else {
          return (
            <PageButton current={page == currentPage} mr={1}>
              {page}
            </PageButton>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
