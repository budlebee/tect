import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import fire from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import nookies from 'nookies';
import { firebaseAdmin } from '../../firebaseAdmin';
import { useAuth } from '../../auth';

export default function QuestionsMain(props) {
  //console.log('props: ', props.questions);

  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let questionsRef = db
      .collection('questions')
      .orderBy('createdAt', 'desc')
      .limit(10);
    let allQuestions = questionsRef
      .get()
      .then((snapshot) => {
        const questions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(questions);
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }, []);

  if (!questions) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {props.uid ? (
        <button>
          <Link href="/questions/write">
            <a>글쓰기</a>
          </Link>
        </button>
      ) : (
        <div>로그인 필요</div>
      )}
      {questions.map((element) => {
        return (
          <div key={element.id}>
            <Link href="/questions/[id]" as={`/questions/` + element.id}>
              <a>
                <p>{element.title}</p>
                <p>{element.id}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
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
