import styled from 'styled-components';
import Lv5 from '@/assets/image/lv5.svg?react';
import InfoIcon from '@/assets/icon/info-icon.svg?react';
import { useState } from 'react';
import LevelPopUp from '../popup/LevelPopUp';
import { AnimatePresence } from 'framer-motion';

function MyLevel() {
  const [open, setOpen] = useState<boolean>(false);

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
          <Lv5 />
          <UserLevel>
            <h2>Lv.5</h2>
            <span>개발자에게 밤샘은 기본</span>
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
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
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
