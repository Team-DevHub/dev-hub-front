import styled from 'styled-components';
import Button from '../common/Button';
import { ICONS } from '../../constants/assets';
import { useNavigate } from 'react-router-dom';
import { useLevel } from '@/hooks/useLevel';
import useStore from '@/store/store';

function Profile() {
  const { user } = useStore();
  const { userLevel } = useLevel();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Wrapper>
      <h4>내 프로필</h4>
      <Container>
        <img src={userLevel.icon} alt='level icon' width={80} height={80} />
        <UserInfo>
          <h3>{user.nickname}</h3>
          <span>{`${userLevel.level} ${userLevel.name}`}</span>
        </UserInfo>
        <ActivityInfo>
          <Activity>
            <h4>{user.totalPosts}개</h4>
            <span>공유한 지식</span>
          </Activity>
          <Activity>
            <h4>{user.totalPoints}점</h4>
            <span>보유 포인트</span>
          </Activity>
        </ActivityInfo>
        <Button
          size='small'
          text='마이페이지'
          bgColor='color_keyBlue'
          onClick={() => navigate('/my-page')}
          icon={ICONS.house}
        />
      </Container>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  & span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_textGray};
    letter-spacing: 0.3px;
  }
`;

const ActivityInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  & span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_textGray};
    letter-spacing: 0.3px;
  }
`;
