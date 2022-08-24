import Header from 'src/components/layouts/Header';
import Footer from 'src/components/layouts/Footer';
import styles from './styles.module.scss';

export type Props = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
