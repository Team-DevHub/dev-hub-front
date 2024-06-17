import styled from 'styled-components';
import { Comment as IComment } from '@/models/post.model';
import { formatDate } from '@/utils/format';
import { LEVEL } from '@/constants/level';
import { ICONS } from '../../constants/assets';
import { useUserInfo } from '@/hooks/useUserInfo';

import { useComment } from '@/hooks/useComment';

interface CommentItemProps {
  comment: IComment;
}

function CommentItem({ comment }: CommentItemProps) {
  const { userData } = useUserInfo();
  const { deleteComment } = useComment();

  const levelIcon = LEVEL[comment.writer.level]?.icon ?? '';
  const isCommentWriter = userData?.userId === comment.writer.userId;

  const handleDeleteClick = () => {
    deleteComment(comment.commentId);
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
          <h5>{comment.writer.nickname}</h5>
          <span>{formatDate(comment.createdAt)}</span>
        </Writer>
        <Comment>{comment.content}</Comment>
      </Content>
      {isCommentWriter && (
        <DeleteButton src={ICONS.x} alt='delete' onClick={handleDeleteClick} />
      )}
    </Container>
  );
}

export default CommentItem;

const DeleteButton = styled.img`
  opacity: 0;
  transition: opacity 0.3s;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 15px;

  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Writer = styled.div`
  display: flex;
  gap: 12px;

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
