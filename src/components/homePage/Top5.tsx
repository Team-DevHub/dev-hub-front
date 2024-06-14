import styled from 'styled-components';
import TopUser from './TopUser';
import { userAPI } from '@/api/userAPI';
import { useQuery } from '@tanstack/react-query';

function Top5() {
  const { data, isLoading } = useQuery({
    queryKey: ['top5'],
    queryFn: async () => await userAPI.getTopFive(),
  });

  return (
    <Wrapper>
      <h4>지식 공유 Top5 수강생! 🔥</h4>
      <Container>
        {!isLoading &&
          data!.map((user, i) => (
            <TopUser
              key={user.id}
              rank={i + 1}
              userName={user.name}
              points={user.points}
            />
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
