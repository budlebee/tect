import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';
import { Button, List, Typography, Card, Pagination, Input } from 'antd';
import Item from 'antd/lib/list/Item';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const { Search } = Input;
const { Paragraph } = Typography;
const { Meta } = Card;

const getObjectLength = (parent) => {
  if (!parent) {
    return 0;
  }
  let count = 0;
  for (let [key, value] of Object.entries(parent)) {
    count += 1;
  }
  return count;
};

export default function Main(props) {
  console.log('렌더링');
  const [questions, setQuestions] = useState(props.questions);
  const [startDocId, setStartDocId] = useState(props.questions[0].id);
  const [searchResults, setSearchResults] = useState([]);

  async function updateQuestions() {
    try {
      const startDoc = db.collection('questions').doc(startDocId);
      const startSnapshot = await startDoc.get();

      const questionsRef = db
        .collection('questions')
        .orderBy('createdAt', 'desc')
        .startAfter(startSnapshot)
        .limit(7)
        .get();

      const updatedQuestions = (await questionsRef).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const question = { id: doc.id, ...docData };
        return question;
      });

      setQuestions(questions.concat(updatedQuestions));
      setStartDocId(updatedQuestions.slice(-1)[0].id);
    } catch (err) {
      console.log('error: ', err);
      alert('질문 목록을 불러오는데 오류가 발생했습니다.');
      return;
    }
  }

  async function onSearch(value) {
    if (!value) {
      return;
    }
    try {
      const searchRef = db
        .collection('questions')
        .where('authorNickname', '==', value)
        .limit(5)
        .get();

      const tempSearchResults = (await searchRef).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const question = { id: doc.id, ...docData };
        return question;
      });
      if (tempSearchResults.length == 0) {
        alert('검색결과가 없습니다');
        return;
      }
      setSearchResults(tempSearchResults);
    } catch (err) {
      console.log('error: ', err);
      alert('검색결과에 오류가 발생했습니다');
      return;
    }
  }

  useEffect(() => {}, []);
  return (
    <>
      <div className="mainContainer">
        <div>
          <Search
            placeholder="검색할 닉네임 입력"
            allowClear
            onSearch={onSearch}
            style={{ width: 300, margin: '10px 0' }}
          />
        </div>
        {searchResults.length != 0 ? (
          <List
            key="List"
            style={{ minHeight: '350px' }}
            dataSource={searchResults}
            renderItem={(element) => (
              <List.Item style={{ width: '80%' }}>
                <List.Item.Meta
                  avatar="Q"
                  title={
                    <Link
                      href="/questions/[id]"
                      as={`/questions/` + element.id}
                    >
                      <a style={{ color: 'black' }}>{element.title}</a>
                    </Link>
                  }
                  description={
                    <>
                      답변 {getObjectLength(element.answers)}개, 댓글{' '}
                      {getObjectLength(element.comments)}개
                    </>
                  }
                />
              </List.Item>
            )}
          ></List>
        ) : (
          ''
        )}

        <Button type="default" style={{ marginBottom: '15px' }}>
          <Link href="/questions/write">질문하기</Link>
        </Button>

        <List
          key="List"
          style={{ minHeight: '350px' }}
          dataSource={questions}
          renderItem={(element) => (
            <List.Item key={element.id} style={{ width: '80%' }}>
              <List.Item.Meta
                avatar="Q"
                title={
                  <Link href="/questions/[id]" as={`/questions/` + element.id}>
                    <a style={{ color: 'black' }}>{element.title}</a>
                  </Link>
                }
                description={
                  <>
                    답변 {getObjectLength(element.answers)}개, 댓글{' '}
                    {getObjectLength(element.comments)}개
                  </>
                }
              />
            </List.Item>
          )}
        ></List>

        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={updateQuestions}>loading more</Button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const questionsRef = db
    .collection('questions')
    .orderBy('createdAt', 'desc')
    .limit(7)
    .get();
  const questions = (await questionsRef).docs.map((doc) => {
    const docData = JSON.parse(JSON.stringify(doc.data()));
    const question = { id: doc.id, ...docData };
    return question;
  });
  return {
    props: { questions },
  };
}
