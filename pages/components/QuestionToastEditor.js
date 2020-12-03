import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import fire, { db } from '../../firebaseConfig';
import { uid } from 'uid';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor() {
  const [title, setTitle] = useState();
  //const [content, setContent] = useState();
  const editorRef = useRef();
  const test = `<p>adsfasfsafaasdfsadfadsfasdfas</p> <p>asdfdsafdasf<br> saf</p> <ul> <li>sdafdsafsadfasadfsdaf</li> <li class="task-list-item" data-te-task="">dsfasdf</li> <li class="task-list-item" data-te-task="">sadfasdf</li> </ul> <table> <thead> <tr> <th>dsaf</th> <th>asdfdasf</th> </tr> </thead> <tbody> <tr> <td>sadfs</td> <td>sadfasd</td> </tr> <tr> <td>dsaf</td> <td>adsfadsf</td> </tr> </tbody> </table> <p><code data-backticks="1">console.log("hi")</code></p> <blockquote> <p>gdsahigdsag</p> </blockquote> <hr> <p>sdafsfa</p>`;

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  async function onClickSubmit() {
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
      author: {
        nickname: '임시로 고정된 닉네임',
        uid: '임시 uid',
      },
      answers: [],
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

      <button onClick={onClickSubmit}>질문하기!</button>
    </>
  );
}
