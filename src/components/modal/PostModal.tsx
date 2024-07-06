import { modalBackgroundVariants } from '@/styles/variants';
import useClickOutside from '@/hooks/useClickOutside';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostDetail from './PostDetail';
import PostComment from './CommentList';
import CommentInputBar from './CommmentInpuBar';
import { motion } from 'framer-motion';
import usePostStore from '@/store/postStore';

interface Props {
  closeModal: () => void;
}

function PostModal({ closeModal }: Props) {
  const { selectedPost } = usePostStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => closeModal());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <>
      <Background
        variants={modalBackgroundVariants}
        initial='initial'
        animate='animate'
        exit='exit'>
        <Container
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          ref={ref}>
          <PostDetail />
          <Comment>
            <Title>
              <h3>댓글</h3>
              <span>{selectedPost?.totalComments}</span>
            </Title>
            <PostComment />
            <CommentInputBar />
          </Comment>
        </Container>
      </Background>
    </>
  );
}

export default PostModal;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled(motion.div)`
  width: 1200px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 50px;

  border-radius: 18px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
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

const Comment = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
