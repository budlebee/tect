import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { db } from '../../firebaseConfig';

const ToastViewer = dynamic(() => import('../components/ToastViewer'), {
  ssr: false,
});

const AnswerToastEditor = dynamic(
  () => import('../components/AnswerToastEditor'),
  { ssr: false },
);

const Question = (props) => {
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

  useEffect(() => {}, []);

  return (
    <>
      <div className="mainContainer">
        <h2>Q. {props.question.title}</h2>
        <div>{createdAt}</div>

        <ToastViewer initialValue={props.question.content} />

        <div>
          {props.question.answers.map((answer) => {
            return (
              <div key={answer.id}>
                <ToastViewer initialValue={answer.content} />
              </div>
            );
          })}
        </div>

        <div className="answerBlock">
          <h3>Answer</h3>
          <AnswerToastEditor questionID={props.questionID} />
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

    try {
      db.collection('questions')
        .doc(ctx.query.id)
        .collection('answers')
        .get()
        .then((doc) => {});
    } catch (err) {
      console.log('there is no answer');
    }

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
