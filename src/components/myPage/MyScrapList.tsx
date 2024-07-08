import styled from 'styled-components';
import PostModal from '../modal/PostModal';
import { useModal } from '@/hooks/useModal';
import PostEmpty from './PostEmpty';
import { ICONS } from '@/constants/assets';
import { AnimatePresence } from 'framer-motion';
import { useMyPosts } from '@/hooks/useMyPosts';
import Table from '../common/Table';

function MyScrapList() {
  const { myScraps, handleUnscrap } = useMyPosts();
  const { isModalOpen, handleClick, closeModal } = useModal();

  return (
    <Wrapper>
      {myScraps?.length !== 0 ? (
        <Table
          data={myScraps!}
          buttonTitle='스크랩'
          button={(post) => (
            <img
              src={ICONS.scrap.active}
              alt='scrap'
              style={{ cursor: 'pointer' }}
              onClick={() => handleUnscrap(post.postId)}
            />
          )}
          handleClick={handleClick}
        />
      ) : (
        <PostEmpty
          message='아직 저장한 지식이 없어요'
          buttonText='지식 구경하러 가기'
          path='/'
        />
      )}

      <AnimatePresence>
        {isModalOpen && <PostModal closeModal={closeModal} />}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyScrapList;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
