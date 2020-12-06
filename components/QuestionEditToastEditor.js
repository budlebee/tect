import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../firebaseConfig';
import { uid } from 'uid';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor(props) {
  const editorRef = useRef();

  async function onClickSubmit() {
    const content = editorRef.current.getInstance().getMarkdown().toString();
    let now = fire.firestore.Timestamp.fromDate(new Date());
    let questionDoc = db.collection('questions').doc(props.questionID);
    let updateQuestion = await questionDoc.update({
      content: content,
      lastUpdate: now,
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
        initialValue={props.question.content}
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

      <button onClick={onClickSubmit}>수정 완료</button>
    </>
  );
}
