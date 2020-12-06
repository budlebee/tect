import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

//const katex = dynamic(() => import('katex'), { ssr: false });

export default function Write() {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');

  const ToastEditor = dynamic(
    () => import('../../components/QuestionToastEditor.js'),
    {
      ssr: false,
    },
  );

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeBodyText(e) {
    setBodyText(e.target.value);
  }

  function onSubmit() {}

  useEffect(() => {}, []);

  return (
    <div className="mainContainer">
      <Head>
        <title>write a question..</title>
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
    </div>
  );
}
