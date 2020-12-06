import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';
import { Input, Comment, Typography, Card } from 'antd';
import ArticleCommentWrite from '../../components/ArticleCommentWrite';

const { Title } = Typography;
const { Meta } = Card;
const { TextArea } = Input;

const ToastViewer = dynamic(() => import('../../components/ToastViewer'), {
  ssr: false,
});

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
const getDate = (timestamp) => {
  const local = new Date();
  const localTimeZone = local.getTimezoneOffset();

  const createdAt = new Date(timestamp * 1000 - localTimeZone * 60 * 1000);
  const date = createdAt.toISOString().split('T')[0];
  const time = createdAt.toISOString().split('T')[1].split('.')[0];
  return `${date} ${time}`;
};

const Article = (props) => {
  return (
    <>
      <div className="mainContainer">
        <Card
          style={{ marginTop: 16 }}
          actions={[
            <div style={{ float: 'left', paddingLeft: '15px' }}>
              댓글 {getObjectLength(props.article.comments)}개
            </div>,
          ]}
          title={`${props.article.title}`}
        >
          <Meta
            avatar={
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}></span>
            }
            description={
              <div style={{ marginBottom: '10px', marginTop: '-5px' }}>
                <div>created at {getDate(props.article.createdAt.seconds)}</div>
                {props.article.lastUpdate ? (
                  <div>
                    updated at {getDate(props.article.lastUpdate.seconds)}
                  </div>
                ) : (
                  ''
                )}
              </div>
            }
          />
          <ToastViewer initialValue={props.article.content} />
        </Card>

        {props.article.comments &&
          props.article.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <Comment
                  style={{ marginLeft: '15px' }}
                  content={
                    <div style={{ whiteSpace: 'pre' }}>{comment.content}</div>
                  }
                  datetime={getDate(comment.createdAt.seconds)}
                ></Comment>
              </div>
            );
          })}
        <ArticleCommentWrite
          articleID={props.articleID}
          comments={props.article.comments}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    let article = {};

    await db
      .collection('articles')
      .doc(ctx.query.id)
      .get()
      .then((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        article = { id: doc.id, ...docData };
      });

    return {
      props: {
        articleID: ctx.query.id,
        article: article,
      },
    };
  } catch (err) {
    console.log('error: ', err);
    return {
      props: {},
    };
  }
}

export default Article;
