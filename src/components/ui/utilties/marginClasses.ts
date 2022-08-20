export type MarginSize =
  | 0.25
  | 0.5
  | 1
  | 1.5
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 'auto';

export type MarginProps = {
  /**
   * 全方向マージン (rem)
   */
  ma?: MarginSize;

  /**
   * 上方向マージン（rem）
   */
  mt?: MarginSize;

  /**
   * 左方向マージン（rem）
   */
  ml?: MarginSize;

  /**
   * 下方向マージン（rem）
   */
  mb?: MarginSize;

  /**
   * 右方向マージン（rem）
   */
  mr?: MarginSize;
};

const formatMarginSize = (ms: MarginSize): string =>
  ms === 'auto' ? '-auto' : String(ms);

const marginClasses = ({ ma, mt, ml, mb, mr }: MarginProps): string => {
  return [
    ma ? `ma-${formatMarginSize(ma)}` : '',
    mt ? `mt-${formatMarginSize(mt)}` : '',
    ml ? `ml-${formatMarginSize(ml)}` : '',
    mb ? `mb-${formatMarginSize(mb)}` : '',
    mr ? `mr-${formatMarginSize(mr)}` : ''
  ].join(' ');
};

export default marginClasses;
