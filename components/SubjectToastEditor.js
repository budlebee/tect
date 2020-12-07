import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import firebase from 'firebase/app';
import { db } from '../firebaseConfig';
//const { codeSyntaxHighlight } = Editor.plugin;

// props 로 해당하는 subject 주소 받을것.
export default function ToastEditor(props) {
  const editorRef = useRef();

  async function onClickContent() {
    const content = editorRef.current.getInstance().getHtml().toString();

    const subjectDoc = db.collection('subjects').doc(props.subjectID);

    const subjectPosts = subjectDoc.collection('posts');

    // firebase 함수 말고 다른 방법 없을까?
    let now = firebase.firestore.Timestamp.fromDate(new Date());

    let setToDB = await subjectPosts.doc().set({
      content: content,
      createdAt: now,
      authorNickname: '임시로 고정된 닉네임',
      authorUID: '임시 uid',
    });
    window.location.href = `/subjects/${props.subjectID}`;
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
        ]}
      />

      <button onClick={onClickContent}>정보 남기기</button>
    </>
  );
}
