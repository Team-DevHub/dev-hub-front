import { top5Icon } from '@/constants/top5';
import styled from 'styled-components';

interface TopUserProps {
  rank: number;
  userName: string;
  points: number;
}

function TopUser({ rank, userName, points }: TopUserProps) {
  return (
    <Container>
      <Wrapper>
        <img src={top5Icon[rank]} alt='rank' />
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
