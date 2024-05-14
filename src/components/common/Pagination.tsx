import styled from 'styled-components';
import ArrowRight from '@/assets/icon/arrow-right.svg?react';
import ArrowLeft from '@/assets/icon/arrow-left.svg?react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PaginationProps {
  totalPosts: number;
  currentPage: number;
}

const POSTS_PER_PAGE = 21; // 페이지 당 게시글 개수
const PAGE_COUNT = 5; // 하나의 그룹 내 페이지 개수

function Pagination({ totalPosts, currentPage }: PaginationProps) {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const isStart = page - PAGE_COUNT <= 0; // 첫번째 페이지 그룹
  const isEnd =
    Math.floor((page - 1) / PAGE_COUNT) ===
    Math.floor((totalPages - 1) / PAGE_COUNT); // 마지막 페이지 그룹

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  // 페이지 그룹 생성 함수
  const pageArray = (): number[] => {
    const totalPageArr = Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1);

    const pageGroupArr = Array(Math.ceil(totalPages / PAGE_COUNT))
      .fill('')
      .map(() => totalPageArr.splice(0, PAGE_COUNT));

    return pageGroupArr[Math.floor((currentPage - 1) / PAGE_COUNT)];
  };

  // 이동할 페이지 번호 계산 함수
  const getPageNum = (isNext: boolean) => {
    const current = Math.ceil(page / PAGE_COUNT);
    return isNext ? current * PAGE_COUNT + 1 : (current - 1) * PAGE_COUNT;
  };

  return (
    <Container>
      <PagingBox>
        <MoveButton
          to={`${pathname}?page=${getPageNum(false)}`}
          $disabled={isStart}>
          <ArrowRight />
        </MoveButton>
        <ButtonWrapper>
          {pageArray().map((num) => (
            <PageButton
              key={num}
              to={`${pathname}?page=${num}`}
              $isCurrent={page === num}>
              {num}
            </PageButton>
          ))}
        </ButtonWrapper>
        <MoveButton
          to={`${pathname}?page=${getPageNum(true)}`}
          $disabled={isEnd}>
          <ArrowLeft />
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

const MoveButton = styled(Link)<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 600;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'all')};

  & svg {
    fill: ${({ theme, $disabled }) =>
      $disabled ? theme.color_bgLightGray : theme.color_key};
  }
`;

const PageButton = styled(Link)<{ $isCurrent: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.color_key : 'none'};
  color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.color_textWhite : theme.color_textKey};
`;
