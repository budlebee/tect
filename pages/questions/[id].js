import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';
import {
  Form,
  Input,
  Comment,
  Button,
  List,
  Typography,
  Card,
  Pagination,
} from 'antd';
import QuestionCommentWrite from '../components/QuestionCommentWrite';
import { getAllJSDocTags } from 'typescript';
const { Title } = Typography;
const { Meta } = Card;
const { TextArea } = Input;

const ToastViewer = dynamic(() => import('../components/ToastViewer'), {
  ssr: false,
});

const AnswerToastEditor = dynamic(
  () => import('../components/AnswerToastEditor'),
  { ssr: false },
);

const QuestionEditToastEditor = dynamic(
  () => import('../components/QuestionEditToastEditor'),
  { ssr: false },
);

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

const Question = (props) => {
  const [tempPassword, setTempPassword] = useState();
  const [isTryingEdit, setIsTryingEdit] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isAnswered, setIsAnswered] = useState(props.question.answers.length);

  function onChangeTempPassword(e) {
    setTempPassword(e.target.value);
  }
  return (
    <>
      <div className="mainContainer">
        <Card
          style={{ marginTop: 16 }}
          actions={[
            <div style={{ float: 'left', paddingLeft: '15px' }}>
              답변 {getObjectLength(props.question.answers)}개, 댓글{' '}
              {getObjectLength(props.question.comments)}개
            </div>,
          ]}
          title={`Q. ${props.question.title}`}
        >
          <Meta
            avatar={
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}></span>
            }
            title={props.question.authorNickname}
            description={
              <div style={{ marginBottom: '10px', marginTop: '-5px' }}>
                <div>
                  created at {getDate(props.question.createdAt.seconds)}
                </div>
                {props.question.lastUpdate ? (
                  <div>
                    updated at {getDate(props.question.lastUpdate.seconds)}
                  </div>
                ) : (
                  ''
                )}
                {/* {createdAt} */}
              </div>
            }
          />
          {isAuth ? (
            <QuestionEditToastEditor
              question={props.question}
              questionID={props.questionID}
            />
          ) : (
            <ToastViewer initialValue={props.question.content} />
          )}
          {!isTryingEdit && !isAuth && isAnswered == 0 ? (
            <div>
              <button
                onClick={() => {
                  setIsTryingEdit(true);
                }}
              >
                edit your question?
              </button>
            </div>
          ) : (
            ''
          )}
          {isTryingEdit && !isAuth ? (
            <div>
              <input
                placeholder={'작성시 입력한 비밀번호'}
                onChange={onChangeTempPassword}
              ></input>
              <button
                onClick={() => {
                  if (tempPassword == props.question.authorTempPassword) {
                    setIsAuth(true);
                  } else {
                    alert('비밀번호가 다릅니다.');
                  }
                }}
              >
                글 수정하기
              </button>
            </div>
          ) : (
            ''
          )}
        </Card>

        {props.question.comments &&
          props.question.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <Comment
                  style={{ marginLeft: '15px' }}
                  author={comment.author.nickname}
                  // avatar={'ㄴ'}
                  content={
                    <div style={{ whiteSpace: 'pre' }}>{comment.content}</div>
                  }
                  datetime={getDate(comment.createdAt.seconds)}
                ></Comment>
              </div>
            );
          })}

        <QuestionCommentWrite
          questionID={props.questionID}
          comments={props.question.comments}
        />

        <div>
          <br />
          <Title level={2} style={{ marginTop: '10px', marginLeft: '15px' }}>
            {getObjectLength(props.question.answers)} Answers
          </Title>
          {props.question.answers &&
            props.question.answers.map((answer) => {
              return (
                <div key={answer.id}>
                  <Card
                    style={{ marginTop: 16 }}
                    actions={[
                      <div style={{ float: 'left', paddingLeft: '15px' }}>
                        댓글 {getObjectLength(answer.comment)}개
                      </div>,
                    ]}
                    title={answer.title}
                  >
                    <Meta
                      avatar={
                        <span
                          style={{ fontWeight: 'bold', fontSize: '20px' }}
                        ></span>
                      }
                      //title={answer.authorNickname}
                      description={
                        <div
                          style={{ marginBottom: '10px', marginTop: '-5px' }}
                        >
                          {getDate(answer.createdAt.seconds)}
                          {/* {createdAt} */}
                        </div>
                      }
                    />
                    <ToastViewer initialValue={answer.content} />
                  </Card>
                </div>
                // <div key={answer.id} className="answerBlock">
                //   <ToastViewer initialValue={answer.content} />
                // </div>
              );
            })}
        </div>

        <div className="answerBlock">
          <Title level={2} style={{ marginTop: '50px', marginLeft: '15px' }}>
            Add Answer
          </Title>
          <AnswerToastEditor
            questionID={props.questionID}
            answers={props.question.answers}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    // Get a reference to the database service

    let question = {};

    await db
      .collection('questions')
      .doc(ctx.query.id)
      .get()
      .then((doc) => {
        const docData = JSON.parse(JSON.stringify(doc.data()));
        question = { id: doc.id, ...docData };
      });

    return {
      props: {
        questionID: ctx.query.id,
        question: question,
      },
    };
  } catch (err) {
    console.log('error: ', err);
    return {
      props: {},
    };
  }
}

export default Question;
