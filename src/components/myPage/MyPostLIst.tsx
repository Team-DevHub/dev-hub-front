import styled from 'styled-components';
import PostModal from '../modal/PostModal';
import { useModal } from '@/hooks/useModal';
import MyPostEmpty from './MyPostEmpty';
import { ICONS } from '@/constants/assets';
import { useUserInfo } from '@/hooks/useUserInfo';
import { AnimatePresence } from 'framer-motion';
import { useMyPosts } from '@/hooks/useMyPosts';
import Table from './Table';

function MyPostList() {
  const { userData } = useUserInfo();
  const { myPosts, handleDelete } = useMyPosts();
  const { isModalOpen, handleClick, closeModal } = useModal();

  if (!userData) return null;

  return (
    <Wrapper>
      <Title>
        <h2>내가 공유한 지식</h2>
      </Title>

      {userData!.totalPosts > 0 ? (
        <Table
          data={myPosts!}
          buttonTitle='삭제'
          button={(post) => (
            <img
              src={ICONS.delete.black}
              alt='delete'
              style={{ cursor: 'pointer' }}
              onClick={() => handleDelete(post.postId)}
            />
          )}
          handleClick={handleClick}
        />
      ) : (
        <MyPostEmpty />
      )}

      <AnimatePresence>
        {isModalOpen && <PostModal closeModal={closeModal} />}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyPostList;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 15px;

  & span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;
