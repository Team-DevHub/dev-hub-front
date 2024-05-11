import styled from "styled-components";
import ArrowRight from "@/assets/icon/arrow-right.svg?react";
import ArrowLeft from "@/assets/icon/arrow-left.svg?react";
import { useState } from "react";

function Pagination() {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <PagingBox>
        <MoveButton type="button">
          <ArrowRight />
        </MoveButton>
        <ButtonWrapper>
          {Array(3)
            .fill("")
            .map((_, i) => (
              <PageButton
                key={i + 1}
                $isCurrent={page === i + 1}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </PageButton>
            ))}
        </ButtonWrapper>
        <MoveButton type="button">
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

const MoveButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize_base};
  color: ${({ theme }) => theme.color_textGray};
  font-weight: 600;

  & svg {
    fill: ${({ theme }) => theme.color_textGray};
  }

  &:hover {
    color: ${({ theme }) => theme.color_key};

    & svg {
      fill: ${({ theme }) => theme.color_key};
    }
  }
`;

const PageButton = styled.button<{ $isCurrent: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  background-color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.color_key : "none"};
  color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.color_textWhite : theme.color_textKey};
`;
