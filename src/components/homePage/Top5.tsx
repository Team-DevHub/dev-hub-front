import styled from 'styled-components';
import TopUser from './TopUser';
import { useEffect, useState } from 'react';
import { TopFiveRes } from '@/types/api/response';
import { userAPI } from '@/api/userAPI';

function Top5() {
  const [topFive, setTopFive] = useState<TopFiveRes[] | null>(null);

  useEffect(() => {
    const getTopFiveUser = async () => {
      await userAPI.getTopFive().then((res) => {
        if (res) {
          setTopFive(res);
        }
      });
    };
    getTopFiveUser();
  }, []);

  return (
    <Wrapper>
      <h4>지식 공유 Top5 수강생! 🔥</h4>
      <Container>
        {topFive?.map((user, i) => (
          <TopUser rank={i + 1} userName={user.name} points={user.points} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default Top5;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Container = styled.div`
  width: 100%;
  padding: 24px 30px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;
