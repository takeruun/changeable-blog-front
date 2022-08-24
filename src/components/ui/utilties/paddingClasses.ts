export type PaddingSize =
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

export type PaddingProps = {
  /**
   * 全方向パディング (rem)
   */
  pa?: PaddingSize;

  /**
   * 上方向パディング（rem）
   */
  pt?: PaddingSize;

  /**
   * 左方向パディング（rem）
   */
  pl?: PaddingSize;

  /**
   * 下方向パディング（rem）
   */
  pb?: PaddingSize;

  /**
   * 右方向パディング（rem）
   */
  pr?: PaddingSize;
};

const formatPaddingSize = (ms: PaddingSize): string =>
  ms === 'auto' ? '-auto' : String(ms);

const paddingClasses = ({ pa, pt, pl, pb, pr }: PaddingProps): string => {
  return [
    pa ? `pa-${formatPaddingSize(pa)}` : '',
    pt ? `pt-${formatPaddingSize(pt)}` : '',
    pl ? `pl-${formatPaddingSize(pl)}` : '',
    pb ? `pb-${formatPaddingSize(pb)}` : '',
    pr ? `pr-${formatPaddingSize(pr)}` : ''
  ].join(' ');
};

export default paddingClasses;
