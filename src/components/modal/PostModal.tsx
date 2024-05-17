import styled from 'styled-components';
import PostDetail from './PostDetail';
import PostComment from './CommentList';
import CommentInputBar from '../common/CommentInputBar/CommnentInpuBart';
import { commentDummy } from '@/data/commentDummy';

function PostModal() {
  return (
    <>
      <Container>
        <PostDetail />
        <Comment>
          <PostComment
            totalComments={commentDummy.length}
            commentData={commentDummy}
          />
          <CommentInputBar />
        </Comment>
      </Container>
    </>
  );
}

export default PostModal;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  border-radius: 18px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;
