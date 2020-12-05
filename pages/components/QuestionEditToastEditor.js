import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../../firebaseConfig';
import { uid } from 'uid';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor(props) {
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
    //    setContent(editorRef.current.getInstance().getHtml().outerHTML);
    const content = editorRef.current.getInstance().getHtml().toString();
    let questionsRef = await db.collection('questions');
    let date = new Date();
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
    });
    window.location.href = `/questions/${uid20}`;
  }

  return (
    <>
      <input
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

      <button onClick={onClickSubmit}>질문 수정하기</button>
    </>
  );
}
