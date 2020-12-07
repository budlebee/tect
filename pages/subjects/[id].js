import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
  const [subjectInfo, setSubjectInfo] = useState({ name: '' });
  const [posts, setPosts] = useState([]);

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
      setPosts(tempPosts);
      setStartDocId(tempPosts[0].id);
      const getSubjectInfo = await subjectDoc.get().then((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        setSubjectInfo({ id: doc.id, ...docData });
      });
    } catch (err) {
      console.log('error: ', err);
    }
  }, []);

  return (
    <>
      <div className="mainContainer">
        <h2>{subjectInfo.name}</h2>
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <div className="contentBlock">
                  <ToastViewer initialValue={post.content} />
                </div>
              </div>
            );
          })}
        </div>
        <br />

        <h3>{subjectInfo.name}와 관련된 유용한 정보 남기기</h3>
        <SubjectToastEditor subjectID={props.subjectID} />
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
