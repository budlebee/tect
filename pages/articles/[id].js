import React, { useEffect, useState } from 'react';
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
  const [article, setArticle] = useState({
    title: '',
    content: '',
    subject: '',
    createdAt: { seconds: '' },
    authorNickname: '',
    authorUID: '',
    comments: [],
    lastUpdate: { seconds: '' },
  });

  useEffect(async () => {
    try {
      await db
        .collection('articles')
        .doc(props.articleID)
        .get()
        .then((doc) => {
          const docData = JSON.parse(JSON.stringify(doc.data()));
          setArticle({ id: doc.id, ...docData });
        });
    } catch (err) {
      console.log('error: ', err);
      return {
        props: {},
      };
    }
  }, []);

  return (
    <>
      <div className="mainContainer">
        <Card
          style={{ marginTop: 16 }}
          actions={[
            <div style={{ float: 'left', paddingLeft: '15px' }}>
              댓글 {getObjectLength(article.comments)}개
            </div>,
          ]}
          title={`${article.title}`}
        >
          <Meta
            avatar={
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}></span>
            }
            description={
              <div style={{ marginBottom: '10px', marginTop: '-5px' }}>
                <div>created at {getDate(article.createdAt.seconds)}</div>
                {article.lastUpdate ? (
                  <div>updated at {getDate(article.lastUpdate.seconds)}</div>
                ) : (
                  ''
                )}
              </div>
            }
          />
          {article.content != '' ? (
            <ToastViewer initialValue={article.content} />
          ) : (
            ''
          )}
        </Card>

        {article.comments &&
          article.comments.map((comment) => {
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
          comments={article.comments}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    return {
      props: {
        articleID: ctx.query.id,
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
