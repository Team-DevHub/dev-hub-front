import styled from 'styled-components';
import { useState } from 'react';
import DeleteAccountPopUp from '../popup/DeleteAccountPopUp';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/constants/path';
import useStore from '@/store/store';
import { TokenKey } from '@/constants/storage';
import { ICONS } from '../../constants/icons';
import { useProfile } from '@/hooks/useProfile';

function MyInfo() {
  useProfile();
  const navigate = useNavigate();
  const { logOut, user } = useStore();
  const clearStorage = useStore.persist.clearStorage;
  const [open, setOpen] = useState<boolean>(false);

  // 팝업 등장 시 뒷배경 스크롤 방지
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleLogOut = () => {
    logOut();
    localStorage.removeItem(TokenKey);
    clearStorage();
    navigate(LOGIN_ROUTER_PATH.login);
  };

  if (!user) return null;

  return (
    <Wrapper>
      <h2>나의 정보</h2>
      <Container>
        <Content>
          <Info>
            <h4>이름</h4>
            <span>{user.nickname}</span>
          </Info>
          <Info>
            <h4>이메일</h4>
            <span>{user.email}</span>
          </Info>
          <Info>
            <h4>가입일</h4>
            <span>{user.joinDate}</span>
          </Info>
        </Content>
        <IconContainer>
          <CircleButton onClick={handleLogOut}>
            <img src={ICONS.logout} alt='logout' />
            <span>로그아웃</span>
          </CircleButton>
          <CircleButton onClick={() => setOpen(true)}>
            <img src={ICONS.deleteAccount} alt='deleteAccount' />
            <span>회원탈퇴</span>
          </CircleButton>
        </IconContainer>
      </Container>
      <AnimatePresence>
        {open && <DeleteAccountPopUp closePopup={() => setOpen(false)} />}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyInfo;

const Wrapper = styled.div`
  width: 482px;
  height: 200px;
`;

const Container = styled.div`
  width: 482px;
  height: 150px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  padding: 16px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: ${({ theme }) => theme.fontSize_md};
  padding: 12px 0;
  display: flex;
  gap: 6px;

  & h4 {
    width: 50px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize_base};
    font-weight: 400;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const CircleButton = styled.button`
  background-color: rgba(225, 225, 225, 0.35);
  border: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_xs};
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;
