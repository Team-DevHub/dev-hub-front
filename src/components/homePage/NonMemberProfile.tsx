import styled from 'styled-components';
import Button from '../common/Button';
import { ICONS, IMAGES } from '@/constants/icons';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

function NonMemberProfile() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h4>내 프로필</h4>
      <Container>
        <ContentWrapper>
          <img src={IMAGES.nonMember} />
          <UserInfo>
            <h3>비회원</h3>
            <span>로그인하고 지식을 공유해보세요!</span>
          </UserInfo>
        </ContentWrapper>
        <Button
          size='small'
          text='로그인'
          bgColor='color_keyBlue'
          onClick={() => navigate(LOGIN_ROUTER_PATH.login)}
          icon={ICONS.user}
        />
      </Container>
    </Wrapper>
  );
}

export default NonMemberProfile;

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
  gap: 32px;

  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
