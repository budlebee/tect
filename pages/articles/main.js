import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import fire from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';
import { useAuth } from '../../auth';

export default function ArticleMain(props) {
  console.log('props: ', props.questions);
  //const [email, setEmail] = useState(props.email);
  const { user } = useAuth();
  return (
    <div className="container">
      {user ? (
        <div>
          <Link href="/articles/write">
            <a>글쓰기</a>
          </Link>
        </div>
      ) : (
        <div>로그인 필요</div>
      )}
      {props.questions.map((element, index) => {
        return <div key={index}>{element.title}</div>;
      })}
    </div>
  );
}
/*
export async function getServerSideProps() {
  
  let questionsRef = db.collection('questions');
  let allQuestions = questionsRef
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

  return { props: {} };
}
*/

export async function getServerSideProps(ctx) {
  const questions = [];
  if (process.env.NODE_ENV !== 'production') {
    try {
      let questionsRef = db.collection('questions');
      let allQuestions = await questionsRef
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            const obj = doc.data();

            questions.push(obj);
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });

      const cookies = nookies.get(ctx);
      const token = await firebaseAdmin
        .auth()
        .verifyIdToken(cookies.loginToken);

      const { uid, email } = token;

      //const res = await fetch(`http://localhost:3000/api/posts`);
      //const result = await res.json();
      return {
        props: {
          questions: questions,
          uid,
          email,
        },
      };
    } catch (err) {
      console.log(err);
      let questionsRef = db.collection('questions');
      let allQuestions = await questionsRef
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            //console.log(doc.id, '=>', doc.data());
            //const data = JSON.stringify(doc.data());
            //questions.push(data);
            const obj = doc.data();
            questions.push(obj);
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
      return {
        props: { questions },
      };
    }
  } else {
    const res = await fetch(`http://tect.dev/api/posts`);
    const result = await res.json();
    return {
      props: {
        result,
      },
    };
  }
}
