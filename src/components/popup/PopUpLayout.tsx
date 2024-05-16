import { modalBackgroundVariants } from '@/styles/variants';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function PopUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <Background
      variants={modalBackgroundVariants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <PopUp>{children}</PopUp>
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
