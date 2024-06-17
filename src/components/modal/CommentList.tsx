import styled from 'styled-components';
import CommentItem from './CommentItem';
import usePostStore from '@/store/postStore';

function CommentList() {
  const { selectedPost } = usePostStore();

  return (
    <Container>
      {selectedPost?.totalComments === 0 && (
        <CommentEmpty>아직 댓글이 없어요</CommentEmpty>
      )}
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
  align-items: center;
  overflow: auto;
  margin: 10px 0;
  padding: 20px;
  gap: 25px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  background-color: ${({ theme }) => theme.color_bgWhite};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const CommentEmpty = styled.div`
  padding: 240px 0;
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_md};
`;
