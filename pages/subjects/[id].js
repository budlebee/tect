import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Subject.module.css';

const ToastViewer = dynamic(() => import('../components/ToastViewer'), {
  ssr: false,
});

const SubjectToastEditor = dynamic(
  () => import('../components/SubjectToastEditor'),
  { ssr: false },
);

const Subject = (props) => {
  useEffect(() => {
    console.log(props.posts);
  }, []);

  return (
    <>
      <div className="mainContainer">
        <h2>{props.subjectInfo.name}</h2>
        <div>
          {props.posts.map((post) => {
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

        <h3>{props.subjectInfo.name}을 공부하는데 유용한 정보 남기기</h3>
        <SubjectToastEditor subjectID={props.subjectID} />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    let subjectInfo = {};

    const subjectDoc = db.collection('subjects').doc(ctx.query.id);

    const subjectPosts = subjectDoc
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .get();

    const posts = await (await subjectPosts).docs.map((doc) => {
      const docData = JSON.parse(JSON.stringify(doc.data()));
      const post = { id: doc.id, ...docData };
      return post;
    });

    const getSubjectInfo = await subjectDoc.get().then((doc) => {
      const docData = JSON.parse(JSON.stringify(doc.data()));
      subjectInfo = { id: doc.id, ...docData };
    });

    return {
      props: {
        subjectID: ctx.query.id,
        subjectInfo: subjectInfo,
        posts: posts,
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
