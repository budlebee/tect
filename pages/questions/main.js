import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';
import { Button, List, Typography, Card, Pagination } from 'antd';
import Item from 'antd/lib/list/Item';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const ToastViewer = dynamic(() => import('../components/ToastViewer'), {
  ssr: false,
});
const { Paragraph } = Typography;
const { Meta } = Card
const getObjectLength = (parent) => {
  if(!parent){return 0}
  let count = 0
  for (let [key, value] of Object.entries(parent)) {
    count += 1
  }
  return count
}


export default function Main( props ) {
  console.log("렌더링")
  const [ questions, setQuestions ] = useState(props.questions)
  const [ startDocId, setStartDocId ] = useState(props.questions[0].id)

  async function updateQuestions () {
    const startDoc = db.collection('questions').doc(startDocId)
    const startSnapshot = await startDoc.get()

    const questionsRef = db
      .collection('questions')
      .orderBy('createdAt', 'desc')
      .startAfter(startSnapshot)
      .limit(5)
      .get()
    
    const updatedQuestions = (await questionsRef).docs.map((doc) => {
      const docData = JSON.parse(JSON.stringify(doc.data()));
      const question = { id: doc.id, ...docData }
      return question
    })

    setQuestions(questions.concat(updatedQuestions))
    setStartDocId(updatedQuestions.slice(-1)[0].id)
  }
  useEffect(() => {
  }, []);
  return (
    <>
      <div className="mainContainer">
        <Button type="default" 
         style={{marginBottom: "15px"}}>
          <Link href="/questions/write">
          질문하기
          </Link>
        </Button>

        <List key="List"
        style={{ minHeight: "350px" }}
        dataSource={questions}
        renderItem={element => (
          <List.Item style={{ width: "80%"}}>
            <List.Item.Meta
                avatar="Q"
                title={<Link href="/questions/[id]" as={`/questions/` + element.id}>
                <a style={{color:"black"}}>{element.title}</a>
              </Link>}
                description={<>
                답변 {getObjectLength(element.answers)}개, 댓글 {getObjectLength(element.comments)}개</>}
              />
          </List.Item>
        )}
        >
        </List>

        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={ updateQuestions }>loading more</Button>
        </div>

      </div>
    </>
  );
}

export async function getServerSideProps() {
  const questionsRef = db
    .collection('questions')
    .orderBy('createdAt', 'desc')
    .limit(5)
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
