import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import { db } from '../../firebaseConfig';
//const { codeSyntaxHighlight } = Editor.plugin;

// query.id 에 해당하는 글에다가 답변을 달고, 이동할때도 해당 id 로 이동하게끔 할 수 있나?
export default function ToastEditor(props) {
  //  const [content, setContent] = useState();
  const editorRef = useRef();

  async function onClickContent() {
    //  setContent(editorRef.current.getInstance().getHtml().toString());
    const content = editorRef.current.getInstance().getHtml().toString();
    let questionDoc = await db.collection('questions').doc(props.questionID);
    let answersCol = questionDoc.collection('answers');
    let date = new Date();
    let now = firebase.firestore.Timestamp.fromDate(new Date());

    let setToDB = await answersCol.doc().set({
      content: content,
      createdAt: now,
      author: {
        nickname: '임시로 고정된 닉네임',
        uid: '임시 user uid',
      },
    });
    window.location.href = '/questions/main';
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

      <button onClick={onClickContent}>답변하기</button>
    </>
  );
}
