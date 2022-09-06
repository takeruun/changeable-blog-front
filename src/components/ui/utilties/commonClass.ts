import marginClasses, { MarginProps, margins } from './marginClasses';

export type CommonProps = {
  'data-test'?: string;
  className?: string;
} & MarginProps;

const classNames = (props?: MarginProps): string =>
  [props ? marginClasses(props) : ''].join(' ');

const commonClass = (
  props: CommonProps,
  className?: string
): { 'data-test'?: string; className: string } => {
  return {
    'data-test': props['data-test'],
    className: className + ' ' + classNames(props)
  };
};

export default commonClass;
