import marginClasses, { MarginProps } from './marginClasses';

export type CommonProps = {
  'data-test'?: string;
} & MarginProps;

const classNames = (props?: MarginProps): string =>
  [props ? marginClasses(props) : ''].join(' ');

const commonClass = (
  props: CommonProps
): { 'data-test'?: string; className: string } => {
  return {
    'data-test': props['data-test'],
    className: classNames(props)
  };
};

export default commonClass;
