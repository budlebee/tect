import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>tect.dev</title>
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
          content="세상 모든 지식의 테크트리, tect.dev"
        />
        <meta property="og:url" content="https://tect.dev"></meta>
      </Head>
      <nav className="navbar">
        <span className="navbar-item">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>TechTrees</a>
          </Link>
        </span>
        <span className="navbar-item">
          <Link
            href="/articles/main"
            as={process.env.BACKEND_URL + '/articles/main'}
          >
            <a>Articles</a>
          </Link>
        </span>
        <span className="navbar-item">
          <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
            <a>About</a>
          </Link>
        </span>
        {/*<Link href="/">
            <a class="navbar-item">Articles</a>
          </Link>
          <Link href="/qna/main">
            <a class="navbar-item">QnA</a>
          </Link>*/}
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
