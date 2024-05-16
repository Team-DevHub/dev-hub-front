'use client';

import { modalBackgroundVariants } from '@/styles/variants';
import useClickOutside from '@/utils/useClickOutside';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  closePopup: () => void;
}

function PopUpLayout({ children, closePopup }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => closePopup());
  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <PopUp ref={ref}>{children}</PopUp>
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
`;

const PopUp = styled(motion.div)`
  width: 400px;
  height: fit-content;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border-radius: 12px;
`;
