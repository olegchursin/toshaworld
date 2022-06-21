import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ToshaWorld</title>
        <meta name="description" content="Welcome to ToshaWorld" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap"
          rel="stylesheet"
        />
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
