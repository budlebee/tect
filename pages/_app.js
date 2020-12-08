import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import '../styles/globals.css';
import '../styles/antd.less';

import { Menu, PageHeader } from 'antd';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';

const MyApp = ({ Component, pageProps }) => {
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
        <title>techtree of all knowledge, tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="모든 지식의 테크트리, tect.dev"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="tect.dev" />
        <meta
          property="og:description"
          content="모든 지식의 테크트리, tect.dev"
        />
        <meta property="og:url" content="https://tect.dev"></meta>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
      <PageHeader
        title={
          <Link href="/" as={process.env.BACKEND_URL}>
            <a style={{ color: 'black' }}>Tect.dev</a>
          </Link>
        }
        tags={
          <Menu mode="horizontal">
            <Menu.Item danger={true} key="questions">
              <Link
                href="/questions/main"
                as={process.env.BACKEND_URL + '/questions/main'}
              >
                <a>Questions</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="articles" disabled={false}>
              <Link
                href="/articles/main"
                as={process.env.BACKEND_URL + '/articles/main'}
              >
                <a>Articles</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
                <a>About</a>
              </Link>
            </Menu.Item>
          </Menu>
        }
      ></PageHeader>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
