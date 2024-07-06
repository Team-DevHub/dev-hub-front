import styled from 'styled-components';
import Link from './Link';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import { LEVEL } from '@/constants/level';
import { formatDate } from '@/utils/format';
import { getCategoryName } from '@/utils/getCategoryName';
import usePostStore from '@/store/postStore';
import { ICONS } from '@/constants/assets';

function PostDetail() {
  const { selectedPost } = usePostStore();

  if (!selectedPost) {
    return;
  }

  const levelIcon = LEVEL[selectedPost.writer.level]?.icon ?? '';

  return (
    <>
      <Container>
        <TopBar>
          <Tag>{getCategoryName(selectedPost.categoryId)}</Tag>
          <img src={ICONS.scrap.active} alt='' />
          <UserInfo>
            <span>Lv.{selectedPost.writer.level}</span>
            <h4>{selectedPost.writer.nickname}</h4>
          </UserInfo>
          <img
            src={levelIcon}
            alt={`Level ${selectedPost.writer.level} icon`}
            width={40}
          />
        </TopBar>
        <Post>
          <h2>{selectedPost.title}</h2>

          <Viewer
            width='100%'
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
            initialValue={selectedPost.content}
            theme='dark'
          />
        </Post>
        <Link />
        <Date>{formatDate(selectedPost.createdAt)}</Date>
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
  font-size: ${({ theme }) => theme.fontSize_base};
  padding: 7px 17px;
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
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Post = styled.div`
  margin: 30px 0;
  & h2 {
    margin-bottom: 20px;
    line-height: 160%;
  }
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_sm};
  font-weight: 300;
  padding-top: 30px;
  margin-top: auto;
`;
