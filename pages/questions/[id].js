import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import firebase from 'firebase/app';

const Question = (props) => {
  var date = new Date(props.question.createdAt.seconds * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  const createdAt = 'created at ' + date;

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <div>{props.question.title}</div>
      <div>{props.question.content}</div>
      <div>{createdAt}</div>
      {/* <div>
        <button>
          <Link href={`/questions/edit/${props.questionID}`}>
            <a>글수정</a>
          </Link>
        </button>
        <button
          onClick={() => {
            db.collection('questions')
              .doc(props.questionID)
              .delete()
              .then(() => {
                console.log(`${props.title} have been deleted`);
                window.location.href = '/questions/main';
              });
          }}
        >
          글삭제
        </button>
      </div> */}
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    //let question = {};

    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };

    try {
      firebase.initializeApp(firebaseConfig);
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      window.firebase = firebase;
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }
    // Get a reference to the database service
    const db = firebase.firestore();

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

export default Question;
