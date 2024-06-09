import styled, { css } from 'styled-components';
import DeleteIcon from '@/assets/icon/delete-red-icon.svg?react';
import { useEffect, useState } from 'react';
import { PostSummary } from '@/types/api/response';
import { postAPI } from '@/api/postAPI';
import { getCategoryName } from '@/utils/getCategoryName';
import { formatDate } from '@/utils/format';
import PostModal from '../modal/PostModal';
import { useModal } from '@/hooks/useModal';

function MyPostList() {
  const [myPosts, setMyPosts] = useState<PostSummary[] | null>(null);
  const { isModalOpen, handleClick, closeModal } = useModal();

  useEffect(() => {
    const fetchMyPosts = async () => {
      const params = { myPage: true, page: 1, limit: 100 }; // api 수정 전 임시
      const response = await postAPI.posts(params);
      setMyPosts(response.result);
    };
    fetchMyPosts();
  }, []);

  return (
    <Wrapper>
      <Title>
        <h2>내가 공유한 지식</h2>
        <span>12개</span>
      </Title>
      <Container>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th className='category'>카테고리</Th>
                <Th className='title'>제목</Th>
                <Th className='createAt'>작성 일자</Th>
                <Th className='delete'>삭제</Th>
              </tr>
            </thead>
          </Table>
          <TBodyWrapper>
            <Table>
              <tbody>
                {myPosts?.map((post: PostSummary) => (
                  <tr
                    key={post.postId}
                    onClick={() => handleClick(post.postId)}>
                    <Td className='category'>
                      <Tag>{getCategoryName(post.categoryId)}</Tag>
                    </Td>
                    <Td className='title'>{post.title}</Td>
                    <Td className='createAt'>{formatDate(post.createdAt)}</Td>
                    <Td className='delete'>
                      <DeleteButton />
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TBodyWrapper>
        </TableWrapper>
        {isModalOpen && <PostModal closeModal={closeModal} />}
      </Container>
    </Wrapper>
  );
}

export default MyPostList;

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  gap: 6px;
  align-items: flex-end;

  & span {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Container = styled.div`
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const TBodyWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color_bgLightGray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color_key};
    border-radius: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr:last-child td {
    border-bottom: none;
  }
`;

const columnStyles = css`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-weight: 700;
  text-align: center;
  &.category {
    width: 15%;
  }
  &.title {
    width: 50%;
    text-align: left;
  }
  &.createAt {
    width: 20%;
  }
  &.delete {
    width: 15%;
  }
`;

const Th = styled.th`
  ${columnStyles}
`;

const Td = styled.td`
  ${columnStyles}

  font-weight: 400;
  vertical-align: middle;
  cursor: pointer;

  &.title {
    font-weight: 500;
  }

  &.createAt {
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.color_textWhite};
  background-color: ${({ theme }) => theme.color_key};
  font-size: ${({ theme }) => theme.fontSize_sm};
  padding: 5px 14px;
  border-radius: 10px;
  font-weight: 500;
`;

const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
`;
