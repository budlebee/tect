import React, { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../firebaseConfig';

import { Form, Input, Comment, Button } from 'antd';
const { TextArea } = Input;

const QuestionCommentWrite = (props) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [randomInt, setRandomInt] = useState(Math.floor(Math.random() * 5));
  const [botCheck, setBotCheck] = useState();

  async function onClickContent() {
    if (!content) {
      return;
    }
    if (botCheck != randomInt + 5) {
      alert('자동입력 방지 숫자를 다시 입력해 주세요.');
      return;
    }

    let articleDoc = await db.collection('articles').doc(props.articleID);
    let now = firebase.firestore.Timestamp.fromDate(new Date());
    let commentsInfo = {
      content: content,
      createdAt: now,
      authorNickname: '임시 닉네임',
      authorUID: '임시 user uid',
    };
    let setToAnswerInQuestion = await articleDoc.update({
      comments: [...props.comments, commentsInfo],
    });

    window.location.href = `/articles/${props.articleID}`;
  }

  const onChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  function onChangeBotCheck(e) {
    e.preventDefault();
    setBotCheck(e.target.value);
  }

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
              <img src="/images/dice-five.png" width="30px" height="30px" /> +
              {randomInt} = ?
            </div>
            <br />
            <Input
              value={botCheck}
              placeholder="Answer..."
              size="small"
              onChange={onChangeBotCheck}
            ></Input>
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
