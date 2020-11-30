import React from "react";
import Head from "next/head";

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

      <Component {...pageProps} />
    </>
  );
};


export default MyApp;
