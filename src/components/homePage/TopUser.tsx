import styled from "styled-components";

interface TopUserProps {
  rank: number;
  userName: string;
  points: number;
}

function TopUser({ rank, userName, points }: TopUserProps) {
  return (
    <Container>
      <Wrapper>
        <Rank>{rank}</Rank>
        <h5>{userName}</h5>
      </Wrapper>
      <span>{points}점</span>
    </Container>
  );
}

export default TopUser;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Rank = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize_base};
  background-color: ${({ theme }) => theme.color_key};
  color: ${({ theme }) => theme.color_textWhite};
`;
