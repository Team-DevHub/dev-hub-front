import styled from 'styled-components';
import useStore from '@/store/store';
import { ICONS } from '@/constants/assets';

function MyActivity() {
  const { user } = useStore();
  return (
    <Wrapper>
      <h2>나의 활동</h2>
      <Container>
        <ActivityInfo>
          <img src={ICONS.book} alt='book' />
          <Activity>
            <span>내가 공유한 지식</span>
            <h4>{user!.totalPosts}개</h4>
          </Activity>
        </ActivityInfo>
        <ActivityInfo>
          <img src={ICONS.point} />
          <Activity>
            <span>보유 포인트</span>
            <h4>{user!.totalPoints}점</h4>
          </Activity>
        </ActivityInfo>
      </Container>
    </Wrapper>
  );
}

export default MyActivity;

const Wrapper = styled.div`
  width: 267px;
  height: 146px;
`;

const Container = styled.div`
  width: 267px;
  height: 150px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const ActivityInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Activity = styled.div`
  & h4 {
    margin-top: 6px;
  }

  & span {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;
