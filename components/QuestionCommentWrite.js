import React, { useState } from 'react';
import firebase from 'firebase/app';
import fire, { db } from '../firebaseConfig';

import { Form, Input, Comment, Button, Spin } from 'antd';
const { TextArea } = Input;

const QuestionCommentWrite = (props) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [botCheck, setBotCheck] = useState();
  const [randomInt, setRandomInt] = useState(Math.floor(Math.random() * 5));

  function onChangeBotCheck(e) {
    e.preventDefault();
    setBotCheck(e.target.value);
  }

  async function onClickContent() {
    if (!content) {
      return;
    }

    if (botCheck != randomInt + 5) {
      alert('자동입력 방지 숫자를 다시 입력해 주세요.');
      return;
    }

    // 아무 내용도 없으면 전송이 안 됨.
    try {
      let questionDoc = await db.collection('questions').doc(props.questionID);
      let date = new Date();
      let now = firebase.firestore.Timestamp.fromDate(new Date());
      let commentsInfo = {
        content: content,
        createdAt: now,
        author: {
          nickname: '임시 닉네임',
          uid: '임시 user uid',
        },
      };
      let setToAnswerInQuestion = await questionDoc.update({
        comments: [...props.comments, commentsInfo],
      });

      window.location.href = `/questions/${props.questionID}`;
    } catch (err) {
      alert('오류가 발생했습니다.');
      return;
    }
  }

  const onChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  return (
    <Comment
      content={
        <>
          <Form.Item key={'Formitem_1'}>
            <TextArea
              rows={3}
              onChange={onChange}
              placeholder="Write a comment... (maximum 500 letters)"
              value={content}
              spellCheck={false}
              maxLength={500}
            />
          </Form.Item>
          <Form.Item key={'Formitem_2'}>
            <div>
              <div>
                <img src="/images/dice-five.png" width="30px" height="30px" /> +
                {randomInt} = ?
              </div>
              <Input
                value={botCheck}
                placeholder="Answer..."
                onChange={onChangeBotCheck}
                style={{ width: 100 }}
              ></Input>
            </div>
          </Form.Item>
          <Form.Item key={'Formitem_3'}>
            <Button
              id="addCommentBtn"
              key={'submitCommentButton'}
              loading={submitting}
              onClick={onClickContent}
              type="default"
            >
              댓글 작성
            </Button>
          </Form.Item>
        </>
      }
    />
  );
};

export default React.memo(QuestionCommentWrite);
