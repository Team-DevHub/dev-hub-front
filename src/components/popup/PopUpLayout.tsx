'use client';

import { modalBackgroundVariants } from '@/styles/variants';
import useClickOutside from '@/utils/useClickOutside';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  closePopup: () => void;
  title: string;
  desc: string;
  icon: string;
}

function PopUpLayout({ children, closePopup, title, desc, icon }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => closePopup());
  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <PopUp
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        ref={ref}>
        <img src={icon} alt='icon' />
        <TitleBox>
          <h2>{title}</h2>
          <span>{desc}</span>
        </TitleBox>
        <Content>{children}</Content>
      </PopUp>
    </Background>
  );
}

export default PopUpLayout;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const PopUp = styled(motion.div)`
  width: 400px;
  height: fit-content;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 12px;
  z-index: 20;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & span {
    font-size: ${({ theme }) => theme.fontSize_base};
    color: ${({ theme }) => theme.color_textGray};
  }
`;

const Content = styled.div`
  width: 100%;
  margin-top: 20px;
`;
