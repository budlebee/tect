//import katex from 'katex';
import React, { useEffect, useState, useRef } from 'react';
//import Latex from 'react-latex-next';
//import 'katex/dist/katex.min.css';
//import TeX from '@matejmazur/react-katex';
//import ReactDOM from 'react-dom';
//import { BlockMath, InlineMath } from 'react-katex';
import { Button, Form, Input, Spin } from 'antd';
import dynamic from 'next/dynamic';
//import { EditorProps } from '@toast-ui/react-editor';

const Editor = dynamic(
  () => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false },
);
const ToastEditor = dynamic(() => import('../components/ToastEditor.js'), {
  ssr: false,
});

const Latex = dynamic(() => import('react-latex'), { ssr: false });

export default function Write() {
  const [title, setTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const containerRef = useRef();

  const latexText = '$v^{2}$';

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeBodyText(e) {
    setBodyText(e.target.value);
  }

  function onSubmit() {}

  useEffect(() => {}, []);

  return (
    <>
      <input
        id="postTitleInput"
        placeholder="제목"
        onChange={onChangeTitle}
        value={title}
        key="PostTitleComponent_Input"
      />
      <textarea
        id="postBodyInput"
        rows={10}
        placeholder="본문"
        onChange={onChangeBodyText}
        value={bodyText}
        spellCheck={false}
        key="PostBodyComponent_Input"
        style={{ resize: 'none' }}
      />
      <button onClick={onSubmit}>Submit</button>
      <ToastEditor></ToastEditor>
    </>
  );
}
