import styled from 'styled-components';
import CommentItem from './CommentItem';
import useStore from '@/store/store';

function CommentList() {
  const { selectedPost } = useStore();

  return (
    <Container>
      {selectedPost?.comments.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </Container>
  );
}

export default CommentList;

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 10px 0;
  padding: 20px;
  gap: 20px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  background-color: ${({ theme }) => theme.color_bgWhite};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
