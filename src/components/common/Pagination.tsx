import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ICONS } from '@/constants/assets';

interface PaginationProps {
  totalPosts: number;
  currentPage: number;
}

const POSTS_PER_PAGE = 21; // 페이지 당 게시글 개수
const PAGE_COUNT = 5; // 하나의 그룹 내 페이지 개수

function Pagination({ totalPosts, currentPage }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const [page, setPage] = useState(currentPage);

  const isStart = page - PAGE_COUNT <= 0; // 첫번째 페이지 그룹
  const isEnd =
    Math.floor((page - 1) / PAGE_COUNT) ===
    Math.floor((totalPages - 1) / PAGE_COUNT); // 마지막 페이지 그룹

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  // 페이지 그룹 생성 함수
  const pageArray = (): number[] => {
    const totalPageArr = Array.from({ length: totalPages }, (_, i) => i + 1);
    const pageGroupArr = [];
    for (let i = 0; i < Math.ceil(totalPages / PAGE_COUNT); i++) {
      pageGroupArr.push(totalPageArr.splice(0, PAGE_COUNT));
    }
    return pageGroupArr[Math.floor((page - 1) / PAGE_COUNT)] || [];
  };

  // 이동할 페이지 번호 계산 함수
  const getPageNum = (isNext: boolean) => {
    const current = Math.ceil(page / PAGE_COUNT);
    return isNext ? current * PAGE_COUNT + 1 : (current - 1) * PAGE_COUNT;
  };

  // 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams);
    setPage(newPage);
  };

  return (
    <Container>
      <PagingBox>
        <MoveButton
          disabled={isStart}
          onClick={() => handlePageChange(getPageNum(false))}>
          <img src={ICONS.arrow.right} alt='arrow' />
        </MoveButton>
        <ButtonWrapper>
          {pageArray().map((num) => (
            <PageButton
              key={num}
              isCurrent={page === num}
              onClick={() => handlePageChange(num)}>
              {num}
            </PageButton>
          ))}
        </ButtonWrapper>
        <MoveButton
          disabled={isEnd}
          onClick={() => handlePageChange(getPageNum(true))}>
          <img src={ICONS.arrow.left} alt='arrow' />
        </MoveButton>
      </PagingBox>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PagingBox = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const MoveButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: none;
  border: none;
  & svg {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.color_borderGray : theme.color_key};
  }
`;

const PageButton = styled.button<{ isCurrent: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color_key : 'none'};
  color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color_textWhite : theme.color_textKey};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
