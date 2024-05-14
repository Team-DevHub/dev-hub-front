import styled from 'styled-components';
import PostItem from './PostItem';
import Filter from './Filter';
import { Post } from '@/data/postDummy';

interface PostListProps {
  postData: Post[];
  totalPosts: number;
}

function PostList({ postData, totalPosts }: PostListProps) {
  return (
    <Container>
      <TitleBar>
        <TitleWrapper>
          <h2>게시글</h2>
          <span>{totalPosts}개</span>
        </TitleWrapper>
        <Filter />
      </TitleBar>
      <Posts>
        {postData.map((data: Post) => (
          <PostItem key={data.id} postData={data} />
        ))}
      </Posts>
    </Container>
  );
}

export default PostList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;

  & span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Posts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
