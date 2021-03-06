import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../firebaseConfig';
import { uid } from 'uid';
import { Input, Button, Spin } from 'antd';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor() {
  const [title, setTitle] = useState();
  const [userID, setUserID] = useState();
  const [tempNickname, setTempNickname] = useState();
  const [tempPassword, setTempPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef();
  const [botCheck, setBotCheck] = useState();
  const [randomInt, setRandomInt] = useState(Math.floor(Math.random() * 5));

  function onChangeBotCheck(e) {
    e.preventDefault();
    setBotCheck(e.target.value);
  }

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
    if (botCheck != randomInt + 5) {
      alert('자동입력 방지 숫자를 다시 입력해 주세요.');
      return;
    }
    setIsLoading(true);
    try {
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
      setIsLoading(false);
      window.location.href = `/questions/${uid20}`;
    } catch (err) {
      setIsLoading(false);
      alert('오류가 발생했습니다.');
      return;
    }
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
      <br />
      <div>
        <Input
          onChange={onChangeTempPassword}
          placeholder={'임시 비밀번호'}
          required={true}
          style={{ width: 300 }}
        />
      </div>
      <br />
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
      <br />
      <Spin spinning={isLoading} delay={300} tip="Loading...">
        <Button onClick={onClickSubmit}>질문 남기기</Button>
      </Spin>
    </>
  );
}
