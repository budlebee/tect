import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import firebase from 'firebase/app';
//import { db } from '../../firebaseConfig';
import { Button } from 'antd';

export default function Main({ questions }) {
  //const [questions, setQuestions] = useState();

  useEffect(() => {
    console.log(questions);
  }, []);
  return (
    <>
      <Button type="primary" href="write">
        질문하기
      </Button>
      {questions.map((element) => {
        return (
          <div key={element.id}>
            <Link href="/questions/[id]" as={`/questions/` + element.id}>
              <a>
                <div>{element.title}</div>
                <div>{element.id}</div>
                <div>{element.author.uid}</div>
                <br />
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
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
  const questionsRef = db
    .collection('questions')
    .limit(10)
    .orderBy('createdAt', 'desc')
    .get();
  const questions = (await questionsRef).docs.map((doc) => {
    const docData = JSON.parse(JSON.stringify(doc.data()));
    const question = { id: doc.id, ...docData };
    return question;
  });
  /*.then(async (snapshot) => {
      questions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
*/
  return {
    props: { questions },
  };
}
