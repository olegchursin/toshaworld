import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ToshaWorld</title>
        <meta name="description" content="Welcome to ToshaWorld" />
      </Head>

      <div className="dark:bg-gray-900">
        <Navbar />
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
