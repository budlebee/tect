import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import React, { useState, useRef } from 'react';
import parse from 'html-react-parser';
//const { codeSyntaxHighlight } = Editor.plugin;
export default function ToastEditor() {
  const [content, setContent] = useState();
  const editorRef = useRef();
  const test = `<p>adsfasfsafaasdfsadfadsfasdfas</p> <p>asdfdsafdasf<br> saf</p> <ul> <li>sdafdsafsadfasadfsdaf</li> <li class="task-list-item" data-te-task="">dsfasdf</li> <li class="task-list-item" data-te-task="">sadfasdf</li> </ul> <table> <thead> <tr> <th>dsaf</th> <th>asdfdasf</th> </tr> </thead> <tbody> <tr> <td>sadfs</td> <td>sadfasd</td> </tr> <tr> <td>dsaf</td> <td>adsfadsf</td> </tr> </tbody> </table> <p><code data-backticks="1">console.log("hi")</code></p> <blockquote> <p>gdsahigdsag</p> </blockquote> <hr> <p>sdafsfa</p>`;
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
      <Viewer initialValue={test} />

      <button onClick={onClickContent}>Submit!</button>
      <div>{parse(`${content}`)}</div>
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
