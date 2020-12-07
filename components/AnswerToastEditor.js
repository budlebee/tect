import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../firebaseConfig';

export default function AnswerToastEditor(props) {
  const editorRef = useRef();

  async function onClickContent() {
    const content = editorRef.current.getInstance().getMarkdown().toString();
    let questionDoc = await db.collection('questions').doc(props.questionID);
    let answersCol = db.collection('answers');
    let now = fire.firestore.Timestamp.fromDate(new Date());
    let answerInfo = {
      content: content,
      createdAt: now,
      authorNickname: '임시로 고정된 닉네임',
      authorUID: '임시 user uid',
    };
    let setToAnswerCol = await answersCol.doc().set(answerInfo);
    let setToAnswerInQuestion = await questionDoc.update({
      answers: [...props.answers, answerInfo],
    });
    window.location.href = `/questions/${props.questionID}`;
  }

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="500px"
        initialEditType="markdown"
        placeholder="글쓰기"
        ref={editorRef}
        toolbarItems={[
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'link',
          'divider',
          'code',
          'codeblock',
          'divider',
          'image',
        ]}
      />

      <button onClick={onClickContent}>답변하기</button>
    </>
  );
}