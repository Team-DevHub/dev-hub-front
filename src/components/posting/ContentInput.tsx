// import { useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { useRef } from 'react';

const toolbar = [
  ['bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['link'],
  ['codeblock'],
];

function ContentInput() {
  const editorRef = useRef<Editor>(null);

  const handleOnChange = () => {
    const data = editorRef.current?.getInstance().getMarkdown() || '';
    console.log(data);
  };

  return (
    <Container>
      <h2>공유할 내용</h2>

      <Editor
        toolbarItems={toolbar}
        initialEditType='markdown'
        placeholder='내용을 입력해주세요.'
        initialValue=' '
        hideModeSwitch={true}
        minHeight='400px'
        height='auto'
        language='ko-KR'
        ref={editorRef}
        onChange={handleOnChange}
        plugins={[[codeSyntaxHighlight, { highlighter: prism }]]}
      />
    </Container>
  );
}

export default ContentInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
