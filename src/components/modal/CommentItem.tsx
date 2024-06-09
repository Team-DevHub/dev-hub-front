import styled from 'styled-components';
import { postAPI } from '@/api/postAPI';
import { Comment as IComment } from '@/types/api/response';
import { formatDate } from '@/utils/format';
import { LEVEL } from '@/constants/level';
import { ICONS } from '@/assets/icon/icons';
import useStore from '@/store/store';

interface CommentItemProps {
  comment: IComment;
}

function CommentItem({ comment }: CommentItemProps) {
  const { user, selectedPost, setSelectedPost } = useStore();

  const levelIcon = LEVEL[comment.writer.level]?.icon ?? '';
  const isCommentWriter = user?.userId === comment.writer.id;

  const handleDeleteClick = async () => {
    if (isCommentWriter) {
      const response = await postAPI.deleteComment(comment.commnetId);

      if (response?.isSuccess) {
        const updatedPost = await postAPI.post(selectedPost!.postId);
        setSelectedPost(updatedPost.result);
        alert('댓글이 삭제되었습니다.');
      }
    }
  };

  return (
    <Container>
      <img
        src={levelIcon}
        alt={`Level ${comment.writer.level} icon`}
        width={35}
      />
      <Content>
        <Writer>
          <h5>{comment.writer.name}</h5>
          <span>{formatDate(comment.createdAt)}</span>
        </Writer>
        <Comment>{comment.content}</Comment>
      </Content>
      <DeleteButton
        src={isCommentWriter ? ICONS.delete.red : ICONS.delete.black}
        alt='delete'
        $isCommentWriter={isCommentWriter}
        onClick={handleDeleteClick}
      />
    </Container>
  );
}

export default CommentItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 15px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Writer = styled.div`
  display: flex;
  gap: 5px;

  & span {
    color: ${({ theme }) => theme.color_textGray};
    font-size: ${({ theme }) => theme.fontSize_sm};
    font-weight: 300;
  }
`;

const Comment = styled.span`
  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textBlack};
  line-height: 140%;
`;

const DeleteButton = styled.img<{ $isCommentWriter: boolean }>`
  cursor: ${({ $isCommentWriter }) =>
    $isCommentWriter ? 'pointer' : 'default'};
  &:hover {
    opacity: ${({ $isCommentWriter }) => ($isCommentWriter ? 0.8 : 1)};
  }
`;
