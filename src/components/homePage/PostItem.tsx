import styled from 'styled-components';
import CommentIcon from '@/assets/icon/comment-icon.svg?react';
import PersonIcon from '@/assets/icon/person-icon.svg?react';
import { Post } from '@/data/postDummy';
import { motion } from 'framer-motion';

interface PostItemProps {
  postData: Post;
  onClick: () => void;
}

function PostItem({ postData, onClick }: PostItemProps) {
  return (
    <Container
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.05 }}>
      <TopBar>
        <Tag>{postData.category}</Tag>
        <Date>2024.04.28</Date>
      </TopBar>
      <PostTitle>{postData.title}</PostTitle>
      <BottomBar>
        <Comment>
          <CommentIcon /> {postData.comments}
        </Comment>
        <Writer>
          <PersonIcon /> {postData.writer}
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
