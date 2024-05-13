import React from 'react';
import styled from 'styled-components';
import { myPostDummy } from '@/data/myPostDummy';
import DeleteIcon from "@/assets/icon/delete-red-icon.svg?react"


interface Post {
  id: number;
  category: string;
  title: string;
  createAt: string;
}

const MyPostList: React.FC = () => {
  return (
    <Wrapper>
     <Title>내가 공유한 지식</Title>
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>카테고리</Th>
            <Th>제목</Th>
            <Th>작성일자</Th>
            <Th>삭제</Th>
          </tr>
        </thead>
        <tbody>
          {myPostDummy.map((post: Post) => (
            <tr key={post.id}>
              <Td>{post.category}</Td>
              <Td>{post.title}</Td>
              <Td>{post.createAt}</Td>
              <Td><DeleteIcon/></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </Wrapper>
  );
};

export default MyPostList;

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.bgWhite};
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 12px;
 
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding-bottom: 13px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  align-items: center;
`;

const Th = styled.th`
  padding: 20px 60px;
  font-weight: 700; 
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 17px 60px;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
`;
