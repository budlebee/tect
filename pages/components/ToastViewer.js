import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import React, { Component } from 'react';

export default function ToastViewer(props) {
  return (
    <>
      <Viewer initialValue={props.initialValue} />
    </>
  );
}
