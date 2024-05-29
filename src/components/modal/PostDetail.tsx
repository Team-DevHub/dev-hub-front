import styled from 'styled-components';
import Lv5 from '@/assets/image/lv5.svg?react';
import Link from './Link';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';

const markdownText = `
** editor test**
* editor test*
~~ editor test~~



> editor test

*  editor test
*  editor test
 
 ***

모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook 만들었는데 필요하신 분들은 이거 사용해보세요~~~!
\`\`\`js
import { useEffect } from 'react';

/* ----- 모달 바깥 클릭 시 모달이 닫히도록 하는 hook -----

- ref: 모달에 해당하는 ref 객체
- handler: 바깥 클릭 시 실행할 함수

  ** 예시 **
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setOpen(false));
*/

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutside;
\`\`\`
`;

function PostDetail() {
  return (
    <>
      <Container>
        <TopBar>
          <Tag>React</Tag>
          <UserInfo>
            <span>Lv.5</span>
            <h6>류지민</h6>
          </UserInfo>
          <Lv5 width={30} height={30} />
        </TopBar>
        <Post>
          <h2>모달 바깥 클릭 시 닫히도록 하는 React 커스텀 hook 코드 공유</h2>

          <Viewer
            width='100%'
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            initialValue={markdownText}
            theme='dark'
          />
        </Post>
        <Link />
        <Date>2024.04.28</Date>
      </Container>
    </>
  );
}

export default PostDetail;

const Container = styled.div`
  width: 670px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color_textWhite};
  background-color: ${({ theme }) => theme.color_key};
  font-size: ${({ theme }) => theme.fontSize_sm};
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 500;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-right: 10px;
  flex-grow: 1;
  text-align: right;

  & span {
    font-size: ${({ theme }) => theme.fontSize_xs};
    color: ${({ theme }) => theme.color_textGray};
  }

  & h6 {
    font-size: ${({ theme }) => theme.fontSize_sm};
    font-weight: 500;
  }
`;

const Post = styled.div`
  margin: 30px 0;
  & h2 {
    margin-bottom: 20px;
  }
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_sm};
  font-weight: 300;
  padding-top: 30px;
  margin-top: auto;
`;
