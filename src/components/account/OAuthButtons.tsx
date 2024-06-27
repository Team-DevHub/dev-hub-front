import styled from 'styled-components';
import { ICONS } from '@/constants/assets';
import { motion } from 'framer-motion';

function OAuthButtons() {
  return (
    <Container>
      <div className='title'>
        SNS 계정으로 간편하게
        <br />
        시작해볼까요?
      </div>
      <ButtonWrapper>
        <Button>
          <motion.img
            whileTap={{ scale: 0.95 }}
            src={ICONS.button.google}
            alt='google'
          />
          <span>Google</span>
        </Button>
        <Button>
          <motion.img
            whileTap={{ scale: 0.95 }}
            src={ICONS.button.github}
            alt='github'
          />
          <span>Github</span>
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default OAuthButtons;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color_bgWhite};
  box-shadow: 0px 4px 40px 4px #0000000a;
  border-radius: 12px;
  padding: 24px 64px;
  gap: 24px;

  .title {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_base};
    line-height: 160%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 500;
`;
