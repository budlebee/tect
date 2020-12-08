import React, { useEffect, useState } from 'react';
import { Button, List, Spin } from 'antd';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Subject.module.css';

const Subject = (props) => {
  const ToastViewer = dynamic(() => import('../../components/ToastViewer'), {
    ssr: false,
  });

  const SubjectToastEditor = dynamic(
    () => import('../../components/SubjectToastEditor'),
    { ssr: false },
  );

  const [startDocId, setStartDocId] = useState();
  const [subjectInfo, setSubjectInfo] = useState({ name: props.subjectID });
  const [posts, setPosts] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  async function updateArticles() {
    try {
      const startDoc = db
        .collection('subjects')
        .doc(props.subjectID)
        .collection('posts')
        .doc(startDocId);
      const startSnapshot = await startDoc.get();

      const articlesRef = db
        .collection('subjects')
        .doc(props.subjectID)
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .startAfter(startSnapshot)
        .limit(7)
        .get();

      const updatedArticles = (await articlesRef).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const article = { id: doc.id, ...docData };
        return article;
      });

      setArticles(posts.concat(updatedArticles));
      setStartDocId(updatedArticles.slice(-1)[0].id);
    } catch (err) {
      console.log('error: ', err);
      alert('글 목록을 불러오는데 오류가 발생했습니다.');
      return;
    }
  }

  useEffect(async () => {
    setIsLoadingPosts(true);
    try {
      const subjectDoc = db.collection('subjects').doc(props.subjectID);

      const subjectPosts = subjectDoc
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get();

      const tempPosts = await (await subjectPosts).docs.map((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        const post = { id: doc.id, ...docData };
        return post;
      });
      setIsLoadingPosts(false);
      setPosts(tempPosts);
      setStartDocId(tempPosts[0].id);
      const getSubjectInfo = await subjectDoc.get().then((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        setSubjectInfo({ id: doc.id, ...docData });
      });
    } catch (err) {
      setIsLoadingPosts(false);
      console.log('error: ', err);
    }
  }, []);

  return (
    <>
      <div className="mainContainer">
        <h2>{subjectInfo.name}</h2>
        {!isPosting ? (
          <Button
            onClick={() => {
              setIsPosting(true);
            }}
          >
            {subjectInfo.name} 공부와 관련된 정보 남기기
          </Button>
        ) : (
          ''
        )}

        {isPosting ? <SubjectToastEditor subjectID={props.subjectID} /> : ''}
        <div>
          <Spin spinning={isLoadingPosts} delay={200}></Spin>
        </div>
        <List
          key="List"
          style={{ minHeight: '350px' }}
          dataSource={posts}
          renderItem={(element) => (
            <List.Item key={element.id} style={{ width: '80%' }}>
              <ToastViewer initialValue={element.content} />
            </List.Item>
          )}
        ></List>
        {posts.length > 6 ? (
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
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    return {
      props: {
        subjectID: ctx.query.id,
      },
    };
  } catch (err) {
    console.log('error: ', err);
    return {
      props: {},
    };
  }
}

export default Subject;
