import React from 'react';
import { Head } from 'next/head';

export default function HtmlHeader() {
  return (
    <Head>
      <title>tect.dev</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>
  );
}
