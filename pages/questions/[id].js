import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';
import '../../styles/Questions.module.css';

const ToastViewer = dynamic(() => import('../components/ToastViewer'), {
  ssr: false,
});

const AnswerToastEditor = dynamic(
  () => import('../components/AnswerToastEditor'),
  { ssr: false },
);

const Question = (props) => {
  const [comment, setComment] = useState();
  const [comments, setComments] = useState(props.question.comments);
  //const [answers, setAnswers] = useState(props.question.answers);

  var date = new Date(props.question.createdAt.seconds * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  const createdAt = 'created at ' + date;

  function onChangeComment(e) {
    setComment(e.target.value);
  }

  async function onSubmitComment() {
    let questionDoc = await db.collection('questions').doc(props.questionID);
    let now = firebase.firestore.Timestamp.fromDate(new Date());
    let commentInfo = {
      content: comment,
      createdAt: now,
      author: {
        nickname: '임시로 고정된 닉네임',
        uid: '임시 user uid',
      },
    };
    let setCommentToQuestion = await questionDoc.update({
      comments: [...comments, commentInfo],
    });
    //window.location.href = `/questions/${props.questionID}`;
    setComments([...comments, commentInfo]);
    setComment('');
  }
  useEffect(() => {}, []);

  return (
    <>
      <div className="mainContainer">
        <h2>Q. {props.question.title}</h2>
        <div>{createdAt}</div>

        <ToastViewer initialValue={props.question.content} />

        <div>Comments on Question</div>
        {comments.map((comment) => {
          return <div key={comment.id}>{comment.content}</div>;
        })}
        <input
          placeholder={'짧은 코멘트 남기기'}
          onChange={onChangeComment}
          value={comment}
        />
        <button onClick={onSubmitComment}>댓글 남기기</button>

        <div>
          <h3>Answers</h3>
          {props.question.answers.map((answer) => {
            return (
              <div key={answer.id} className="answerBlock">
                <ToastViewer initialValue={answer.content} />
              </div>
            );
          })}
        </div>

        <div className="answerBlock">
          <h3>Add New Answer</h3>
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
