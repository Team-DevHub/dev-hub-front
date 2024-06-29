import styled from 'styled-components';
import { useState } from 'react';
import DeleteAccountPopUp from '../popup/DeleteAccountPopUp';
import { AnimatePresence } from 'framer-motion';
import { ICONS } from '../../constants/assets';
import { useAuth } from '@/hooks/useAuth';
import { useUserInfo } from '@/hooks/useUserInfo';

function MyInfo() {
  const { logOut } = useAuth();
  const { userData } = useUserInfo();
  const [open, setOpen] = useState<boolean>(false);

  // 팝업 등장 시 뒷배경 스크롤 방지
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  if (!userData) return null;

  return (
    <Wrapper>
      <h2>나의 정보</h2>
      <Container>
        <Content>
          <Info>
            <h4>이름</h4>
            <p>{userData.nickname}</p>
          </Info>
          <Info>
            <h4>이메일</h4>
            <p>{userData.email}</p>
          </Info>
          <Info>
            <h4>가입일</h4>
            <p>{userData.joinDate}</p>
          </Info>
        </Content>
        <ButtonContainer>
          <CircleButton onClick={logOut}>
            <img src={ICONS.logout} alt='logout' />
            <span>로그아웃</span>
          </CircleButton>
          <CircleButton onClick={() => setOpen(true)}>
            <img src={ICONS.deleteAccount} alt='deleteAccount' />
            <span>회원탈퇴</span>
          </CircleButton>
        </ButtonContainer>
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
  gap: 12px;
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

  & p {
    flex: 1;
    white-space: pre-wrap;
    font-size: ${({ theme }) => theme.fontSize_base};
    font-weight: 400;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`;

const ButtonContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CircleButton = styled.button`
  background-color: ${({ theme }) => theme.color_bgLightGray};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_sm};
  font-weight: 800;

  &:hover {
    opacity: 0.9;
  }
`;
