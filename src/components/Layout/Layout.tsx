import Header from '@components/Header';

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
