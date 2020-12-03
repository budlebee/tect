import React, { useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebaseConfig';
import { Button } from 'antd';
import '../../styles/Questions.module.css';

export default function Main({ questions }) {
  //const [questions, setQuestions] = useState();

  useEffect(() => {
    console.log(questions);
  }, []);
  return (
    <>
      <div className="mainContainer">
        <Button type="primary" href="write">
          질문하기
        </Button>
        {questions.map((element) => {
          return (
            <div key={element.id}>
              <Link href="/questions/[id]" as={`/questions/` + element.id}>
                <a>
                  <div className="questionCard">
                    <h3>Q. {element.title}</h3>
                  </div>

                  <br />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const questionsRef = db
    .collection('questions')
    .limit(5)
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
