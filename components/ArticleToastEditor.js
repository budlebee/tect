import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../firebaseConfig';
import { uid } from 'uid';

export default function ToastEditor() {
  const [title, setTitle] = useState();

  const editorRef = useRef();

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  async function onClickSubmit() {
    const uid20 = uid(20);
    const content = editorRef.current.getInstance().getHtml().toString();
    let articlesRef = await db.collection('articles');
    let now = fire.firestore.Timestamp.fromDate(new Date());

    let setToDB = await articlesRef.doc(uid20).set({
      title: title,
      content: content,
      subject: 'physics',
      createdAt: now,
      authorNickname: '임시 닉네임',
      authorUID: '임시 uid',
      comments: [],
      lastUpdate: null,
    });
    window.location.href = `/articles/${uid20}`;
  }

  return (
    <>
      <input onChange={onChangeTitle} placeholder={'글 제목'} required={true} />
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

      <button onClick={onClickSubmit}>글 작성</button>
    </>
  );
}
