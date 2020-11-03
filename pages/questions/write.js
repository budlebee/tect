import React, { useState, useCallback, useEffect } from 'react';
import { uid } from 'uid';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';
import firebase from 'firebase';

export default function Write(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    setUserID(props.uid);
    console.log(props.uid);
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
      <input onChange={onChangeTitle} name="title" />
      <input onChange={onChangeContent} name="content" />
      <button
        onClick={async () => {
          let questionsRef = await db.collection('questions');
          let date = new Date();
          let now = firebase.firestore.Timestamp.fromDate(new Date());

          let setToDB = await questionsRef.doc().set({
            title: title,
            content: content,
            subject: 'physics',
            createdAt: now,
            author: {
              nickname: '임시로 고정된 닉네임',
              uid: userID,
            },
          });
          window.location.href = '/questions/main';
        }}
      >
        글쓰기
      </button>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const { uid, email } = token;

    return {
      props: {
        uid,
        email,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
