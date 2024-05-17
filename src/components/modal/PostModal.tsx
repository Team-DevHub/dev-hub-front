import styled from 'styled-components';
import PostDetail from './PostDetail';
import PostComment from './CommentList';

function PostModal() {
  return (
    <>
      <Container>
        <PostDetail />
        <PostComment />
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
  border: 3px solid ${({ theme }) => theme.color_borderGray};
`;
