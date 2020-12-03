import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import firebase from 'firebase/app';
import fire, { db } from '../../firebaseConfig';
//const { codeSyntaxHighlight } = Editor.plugin;

// props 로 해당하는 subject 주소 받을것.
export default function ToastEditor(props) {
  const [content, setContent] = useState();
  const editorRef = useRef();

  async function onClickContent() {
    setContent(editorRef.current.getInstance().getHtml());

    // 글 추가하기 기능 완성해야함
    const subjectDoc = db.collection('subjects').doc(props.subjectID);

    const subjectPosts = subjectDoc.collection('posts');

    // firebase 함수 말고 다른 방법 없을까?
    let now = firebase.firestore.Timestamp.fromDate(new Date());

    let setToDB = await subjectPosts.doc().set({
      content: content,

      createdAt: now,
      author: {
        nickname: '임시로 고정된 닉네임',
        uid: '임시 uid',
      },
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
