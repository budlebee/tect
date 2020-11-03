import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';
import { useAuth } from '../../auth';

const Question = (props) => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('user: ', user);
    console.log('props.question: ', props.question);
  }, []);

  return (
    <>
      <div>{props.question.title}</div>
      <div>{props.question.content}</div>
      <div>
        {props.question.author.uid === props.uid ? (
          <div>글수정</div>
        ) : (
          <div>로그인 해주세요</div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    let uid = null;
    if (cookies.token) {
      const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
      uid = token.uid;
    }

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
        uid: uid,
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

export default Question;
