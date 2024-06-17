import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

interface ContentInputProps {
  value: string;
  onChange: (value: string) => void;
}

const toolbar = [
  ['bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['codeblock'],
];

function ContentInput({ value, onChange }: ContentInputProps) {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      if (editorInstance.getMarkdown() !== value) {
        editorInstance.setMarkdown(value);
      }
    }
  }, [value]);

  const handleChange = () => {
    const data = editorRef.current?.getInstance().getMarkdown() || '';
    onChange(data);
  };

  return (
    <Container>
      <h2>공유할 내용</h2>
      <EditorContainer
        toolbarItems={toolbar}
        initialEditType='markdown'
        initialValue={' '}
        placeholder={'내용을 입력하세요.'}
        hideModeSwitch={true}
        minHeight='400px'
        height='auto'
        language='ko-KR'
        ref={editorRef}
        onChange={handleChange}
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

const EditorContainer = styled(Editor)`
  background-color: ${({ theme }) => theme.color_bgWhite};
`;
