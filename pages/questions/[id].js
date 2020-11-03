import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';

const Question = (props) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    db.collection('questions')
      .doc(props.questionID)
      .get()
      .then(async (doc) => {
        await setQuestion(doc.data());
        // await console.log(question);
      });

    console.log(
      'props.question: ',
      props.questionContent,
      'user uid: ',
      props.uid,
      'user email: ',
      props.email,
      'props: ',
      props,
    );
  }, []);

  return (
    <>
      <div>{question.title}</div>
      <div>{question.content}</div>
    </>
  );
};

export async function getServerSideProps({ query, ctx }) {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    const question = {};

    await db
      .collection('questions')
      .doc(query.id)
      .get()
      .then((doc) => {
        question['title'] = doc.data().title;
        question['content'] = doc.data().content;
      });

    return {
      props: {
        questionID: query.id,
        uid: uid,
        questionTitle: question.title,
        questionContent: question.content,
      },
    };
  } catch (err) {
    console.log(err);

    const question = {};

    await db
      .collection('questions')
      .doc(query.id)
      .get()
      .then((doc) => {
        question['title'] = doc.data().title;
        question['content'] = doc.data().content;
      });
    return {
      props: {
        questionID: query.id,
        questionTitle: question.title,
        questionContent: question.content,
      },
    };
  }
}

export default Question;
