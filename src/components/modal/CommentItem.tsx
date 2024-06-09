import styled from 'styled-components';
import DeleteIcon from '@/assets/icon/delete-black-icon.svg?react';
import { Comment as IComment } from '@/types/api/response';
import { formatDate } from '@/utils/format';
import { LEVEL } from '@/constants/level';

interface CommentItemProps {
  comment: IComment;
}

function CommentItem({ comment }: CommentItemProps) {
  const levelIcon = LEVEL[comment.writer.level]?.icon ?? '';

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
      <DeleteButton />
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

const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
`;
