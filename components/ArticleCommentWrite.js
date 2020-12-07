import React, { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../firebaseConfig';

import { Form, Input, Comment, Button, Spin } from 'antd';
const { TextArea } = Input;

const QuestionCommentWrite = (props) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function onClickContent() {
    if (!content) {
      return;
    }

    let articleDoc = await db.collection('articles').doc(props.articleID);
    let now = firebase.firestore.Timestamp.fromDate(new Date());
    let commentsInfo = {
      content: content,
      createdAt: now,
      authorNickname: '임시로 고정된 닉네임',
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
            <Spin spinning={isLoading} delay={500} tip="Loading...">
              <Button
                id="addCommentBtn"
                key={'submitCommentButton'}
                loading={submitting}
                onClick={onClickContent}
                type="default"
              >
                댓글 작성
              </Button>
            </Spin>
          </Form.Item>
        </>
      }
    />
  );
};

export default React.memo(QuestionCommentWrite);
