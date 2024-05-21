import { modalBackgroundVariants } from '@/styles/variants';
import useClickOutside from '@/utils/useClickOutside';
import { useRef } from 'react';
import styled from 'styled-components';
import PostDetail from './PostDetail';
import PostComment from './CommentList';
import CommentInputBar from '../common/CommentInputBar/CommmentInpuBart';
import { commentDummy } from '@/data/commentDummy';
import { motion } from 'framer-motion';

interface Props {
  closeModal: () => void;
}

function PostModal({ closeModal }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => closeModal());

  return (
    <>
      <Background
        variants={modalBackgroundVariants}
        initial='initial'
        animate='animate'
        exit='exit'>
        <Container ref={ref}>
          <PostDetail />
          <Comment>
            <PostComment
              totalComments={commentDummy.length}
              commentData={commentDummy}
            />
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Container = styled(motion.div)`
  width: 1200px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 18px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;
