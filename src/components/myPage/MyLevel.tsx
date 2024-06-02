import styled from 'styled-components';
import InfoIcon from '@/assets/icon/info-icon.svg?react';
import { useState } from 'react';
import LevelPopUp from '../popup/LevelPopUp';
import { AnimatePresence } from 'framer-motion';
import { useLevel } from '@/hooks/useLevel';

function MyLevel() {
  const [open, setOpen] = useState<boolean>(false);
  const { userLevel } = useLevel();

  // 팝업 등장 시 뒷배경 스크롤 방지
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Wrapper>
      <h2>나의 레벨</h2>
      <Container>
        <InfoIconWrapper onClick={() => setOpen(true)}>
          <InfoIcon />
        </InfoIconWrapper>
        <Content>
          <img src={userLevel.icon} alt='level' width={80} height={80} />
          <UserLevel>
            <h2>{userLevel.level}</h2>
            <span>{userLevel.name}</span>
          </UserLevel>
        </Content>
      </Container>
      <AnimatePresence>
        {open && <LevelPopUp closePopup={() => setOpen(false)} />}
      </AnimatePresence>
    </Wrapper>
  );
}

export default MyLevel;

const Wrapper = styled.div`
  width: 365px;
  height: 146px;
`;

const Container = styled.div`
  width: 365px;
  height: 150px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  padding: 16px;
  display: flex;

  align-items: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0 24px;
`;

const UserLevel = styled.div`
  & h2 {
    margin-bottom: 10px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize_md};
    font-weight: 500;
  }
`;

const InfoIconWrapper = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
