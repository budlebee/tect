import React, { useEffect, useState, useCallback } from 'react';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';
import { useAuth } from '../../auth';

const QuestionEdit = (props) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //const [userID, setUserID] = useState(null);

  useEffect(() => {
    setTitle(props.question.title);
    setContent(props.question.content);
  }, []);

  const onChangeTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title],
  );
  const onChangeContent = useCallback(
    (e) => {
      setContent(e.target.value);
    },
    [content],
  );

  return (
    <>
      <input onChange={onChangeTitle} name="title" value={title} />
      <input onChange={onChangeContent} name="content" value={content} />
      <div contenteditable="true">{title}</div>
      <div contenteditable="true">{content}</div>
      <button
        onClick={async () => {
          await db.collection('questions').doc(props.questionID).update({
            title: title,
            content: content,
          });
          window.location.href = `/questions/${props.questionID}`;
          console.log(`${props.questionID} have been updated`);
        }}
      >
        수정 완료
      </button>
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

export default QuestionEdit;
