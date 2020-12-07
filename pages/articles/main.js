import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';
import { Button, List } from 'antd';
const fetch = require('node-fetch');

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

export default function Main() {
  console.log('렌더링');
  const [articles, setArticles] = useState([]);
  const [startDocId, setStartDocId] = useState();

  async function updateArticles() {
    try {
      const startDoc = db.collection('articles').doc(startDocId);
      const startSnapshot = await startDoc.get();

      const articlesRef = db
        .collection('articles')
        .orderBy('createdAt', 'desc')
        .startAfter(startSnapshot)
        .limit(7)
        .get();

      const updatedArticles = (await articlesRef).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const article = { id: doc.id, ...docData };
        return article;
      });

      setArticles(articles.concat(updatedArticles));
      setStartDocId(updatedArticles.slice(-1)[0].id);
    } catch (err) {
      console.log('error: ', err);
      alert('글 목록을 불러오는데 오류가 발생했습니다.');
      return;
    }
  }

  useEffect(async () => {
    try {
      const articlesRef = db
        .collection('articles')
        .orderBy('createdAt', 'desc')
        .limit(7)
        .get();
      const tempArticles = (await articlesRef).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const article = { id: doc.id, ...docData };
        return article;
      });
      setArticles(tempArticles);
      setStartDocId(tempArticles[0].id);
    } catch (err) {
      alert('오류가 발생해 메인페이지로 이동합니다.');
      window.location.href = '/';
      return;
    }
  }, []);

  return (
    <>
      <div className="mainContainer">
        <List
          key="List"
          style={{ minHeight: '350px' }}
          dataSource={articles}
          renderItem={(element) => (
            <List.Item key={element.id} style={{ width: '80%' }}>
              <List.Item.Meta
                title={
                  <Link href="/articles/[id]" as={`/articles/` + element.id}>
                    <a style={{ color: 'black' }}>{element.title}</a>
                  </Link>
                }
                description={<>댓글 {getObjectLength(element.comments)}개</>}
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
          <Button onClick={updateArticles}>loading more</Button>
        </div>
      </div>
    </>
  );
}
