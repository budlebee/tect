import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const ToastEditor = dynamic(
  () => import('../../components/ArticleToastEditor.js'),
  {
    ssr: false,
  },
);

export default function Write() {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');

  return (
    <>
      <Head>
        <title>Hello! It's easter egg. You can write a article!</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/paraiso-light.css"
          media="screen"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/css/katex.min.css"
          media="screen"
        />
      </Head>
      <ToastEditor />
    </>
  );
}
