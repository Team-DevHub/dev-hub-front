import styled from 'styled-components';
import PostItem from './PostItem';
import Filter from './Filter';

import PostModal from '../modal/PostModal';
import { AnimatePresence } from 'framer-motion';
import { PostSummary } from '@/types/api/response';
import { useModal } from '@/hooks/useModal';

interface PostListProps {
  posts: PostSummary[];
  totalPosts: number;
}

function PostList({ posts, totalPosts }: PostListProps) {
  const { isModalOpen, handleClick, closeModal } = useModal();

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
        {posts.map((post: PostSummary) => (
          <PostItem
            key={post.postId}
            post={post}
            onClick={() => handleClick(post.postId)}
          />
        ))}
      </Posts>
      <AnimatePresence>
        {isModalOpen && <PostModal closeModal={closeModal} />}
      </AnimatePresence>
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
