import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false },
);

const ToastEditor = dynamic(
  () => import('../../components/QuestionEditToastEditor'),
  {
    ssr: false,
  },
);

export default function EditQuestion(props) {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>update the question..</title>
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
      <ToastEditor question={props.question} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    // Get a reference to the database service

    let question = {};

    await db
      .collection('questions')
      .doc(ctx.query.id)
      .get()
      .then((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        question = { id: doc.id, ...docData };
      });

    return {
      props: {
        questionID: ctx.query.id,
        question: question,
      },
    };
  } catch (err) {
    console.log('error: ', err);
    return {
      props: {},
    };
  }
}
