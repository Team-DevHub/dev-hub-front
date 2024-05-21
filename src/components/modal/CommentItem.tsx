import styled from 'styled-components';
import Musseuk from '@/assets/image/comment-musseuk.svg?react';
import DeleteIcon from '@/assets/icon/delete-black-icon.svg?react';
import { IComment } from '@/data/commentDummy';

function CommentItem({ commentData }: { commentData: IComment }) {
  return (
    <>
      <Container>
        <Musseuk />
        <Content>
          <Writer>
            <h5>{commentData.writer}</h5>
            <span>{commentData.createdAt}</span>
          </Writer>

          <Comment>{commentData.comment}</Comment>
        </Content>
        <DeleteButton />
      </Container>
    </>
  );
}

export default CommentItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 275px;
  display: flex;
  flex-direction: column;
  gap: 3px;
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
