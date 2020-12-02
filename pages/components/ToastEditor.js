import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';

//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor() {
  const [content, setContent] = useState();
  const editorRef = useRef();

  function onClickContent() {
    setContent(editorRef.current.getInstance().getHtml());
  }

  return (
    <>
      <input />
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
      <button onClick={onClickContent}>Submit!</button>
      <div>{content}</div>
    </>
  );
}

/*
class Write2 extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    };
  }

  handleClick = () => {
    this.setState({
      content: this.editorRef.current.getInstance().getHtml(),
    });
  };

  render() {
    return (
      <>
        <input placeholder="제목"></input>
        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="markdown"
          placeholder="글쓰기"
          ref={this.editorRef}
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
          //         plugins={codeSyntaxHighlight}
        />

        <button onClick={this.handleClick}>Submit</button>
      </>
    );
  }
}

export default Write2;
*/
