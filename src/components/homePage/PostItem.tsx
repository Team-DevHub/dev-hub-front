import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PostSummary } from '@/types/api/response';
import { formatDate } from '@/utils/format';
import { getCategoryName } from '@/utils/getCategoryName';
import { ICONS } from '@/constants/icons';

interface PostItemProps {
  post: PostSummary;
  onClick: (postId: number) => void;
}

function PostItem({ post, onClick }: PostItemProps) {
  const handleClick = () => {
    onClick(post.postId);
  };

  return (
    <Container
      onClick={handleClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.05 }}>
      <TopBar>
        <Tag>{getCategoryName(post.categoryId)}</Tag>
        <Date>{formatDate(post.createdAt)}</Date>
      </TopBar>
      <PostTitle>{post.title}</PostTitle>
      <BottomBar>
        <Comment>
          <img src={ICONS.comment} alt='icon' /> {post.totalComments}
        </Comment>
        <Writer>
          <img src={ICONS.person} alt='person' /> {post.writer}
        </Writer>
      </BottomBar>
    </Container>
  );
}

export default PostItem;

const Container = styled(motion.div)`
  width: 300px;
  height: 130px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color_textWhite};
  background-color: ${({ theme }) => theme.color_key};
  font-size: ${({ theme }) => theme.fontSize_sm};
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 500;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize_sm};
  font-weight: 300;
`;

const PostTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 500;
  line-height: 140%;

  // 2줄 이상인 경우 말줄임표
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const BottomBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize_xs};
  color: ${({ theme }) => theme.color_textGray};
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize_sm};
  color: ${({ theme }) => theme.color_key};
  font-weight: 500;
`;
