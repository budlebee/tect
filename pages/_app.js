import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>techtree of all knowledge, tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="techtree of all knowledge, tect.dev"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="tect.dev" />
        <meta
          property="og:description"
          content="techtree of all knowledge, tect.dev"
        />
        <meta property="og:url" content="https://tect.dev"></meta>
      </Head>

      <nav className="navbar">
        <span className="navbar-item">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>Tect.dev</a>
          </Link>
        </span>
        <span className="navbar-item">
          <Link
            href="/questions/main"
            as={process.env.BACKEND_URL + '/questions/main'}
          >
            <a>questions</a>
          </Link>
        </span>
        <span className="navbar-item">
          <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
            <a>About</a>
          </Link>
        </span>
      </nav>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
