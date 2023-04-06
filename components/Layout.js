import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Nav from './nav/Nav';
import MainNav from './mainNav/Nav';
import MarketNav from './marketNav/Nav';
import Footer from './Footer';
import { Fragment } from 'react';
export default function Layout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title ? title + ' - Kupon' : 'Kupon'}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/kupon icon.png" />
      </Head>
      <ToastContainer position="bottom-center" />
      {title == 'Login' ? null : title == 'Register' ? null : title ==
        'Landing' ? (
        <MainNav />
      ) : title?.includes('Market') ? (
        <MarketNav />
      ) : (
        <Nav />
      )}
      <div className="pageWrapper">{children}</div>
      {title == 'Login' ? null : title == 'Register' ? null : <Footer />}
    </Fragment>
  );
}
