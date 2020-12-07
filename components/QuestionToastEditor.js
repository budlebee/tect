import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../firebaseConfig';
import { uid } from 'uid';
import { Input, Button } from 'antd';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor() {
  const [title, setTitle] = useState();
  const [userID, setUserID] = useState();
  const [tempNickname, setTempNickname] = useState();
  const [tempPassword, setTempPassword] = useState();
  //const [content, setContent] = useState();
  const editorRef = useRef();

  function onChangeTempNickname(e) {
    setTempNickname(e.target.value);
  }

  function onChangeTempPassword(e) {
    setTempPassword(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  async function onClickSubmit() {
    if (!tempNickname || !tempPassword) {
      alert('닉네임과 비밀번호를 설정해 주세요');
      return;
    }
    const uid20 = uid(20);
    const content = editorRef.current.getInstance().getMarkdown().toString();
    let questionsRef = await db.collection('questions');
    let now = fire.firestore.Timestamp.fromDate(new Date());

    let setToDB = await questionsRef.doc(uid20).set({
      title: title,
      content: content,
      subject: 'physics',
      createdAt: now,
      authorNickname: tempNickname,
      authorTempPassword: tempPassword,
      authorUID: uid20,
      answers: [],
      comments: [],
      lastUpdate: null,
    });
    window.location.href = `/questions/${uid20}`;
  }

  return (
    <>
      <Input
        onChange={onChangeTitle}
        placeholder={'질문을 한줄로 요약해 주세요'}
        required={true}
      />

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
      <br />
      <div>
        <Input
          onChange={onChangeTempNickname}
          placeholder={'임시 닉네임'}
          required={true}
          style={{ width: 300 }}
        />
      </div>
      <div>
        <Input
          onChange={onChangeTempPassword}
          placeholder={'임시 비밀번호'}
          required={true}
          style={{ width: 300 }}
        />
      </div>
      <Button onClick={onClickSubmit}>질문하기!</Button>
    </>
  );
}
