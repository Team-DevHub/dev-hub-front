import styled from 'styled-components';
import CommentItem from './CommentItem';
import { IComment } from '@/data/commentDummy';

interface CommentListProps {
  commentData: IComment[];
  totalComments: number;
}

function PostList({ commentData, totalComments }: CommentListProps) {
  return (
    <>
      <Wrapper>
        <Title>
          <h4>댓글</h4>
          <span>{totalComments}</span>
        </Title>
        <Container>
          {commentData.map((item: IComment) => (
            <CommentItem key={item.id} commentData={item} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
}

export default PostList;

const Wrapper = styled.div`
  width: 500px;
  padding: 0 40px 5px;
`;

const Title = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;

  & span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 350px;
  margin: 10px 0;
  padding: 20px;
  gap: 15px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  background-color: ${({ theme }) => theme.color_bgWhite};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
