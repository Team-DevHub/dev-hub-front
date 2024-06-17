import { modalBackgroundVariants } from '@/styles/variants';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function AlertLayout({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
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
        {children}
      </PopUp>
    </Background>
  );
}

export default AlertLayout;

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;

const PopUp = styled(motion.div)`
  width: 270px;
  height: 220px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 12px;
  z-index: 999;
  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_md};
  font-weight: 600;
`;
