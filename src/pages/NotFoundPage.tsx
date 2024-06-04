import styled from 'styled-components';
import Musseuk from '@/assets/image/musseuk_404.svg?react';
import { ICONS } from '@/assets/icon/icons';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Background>
      <Container>
        <Wrapper>
          <img src={ICONS.warning404} alt='404' />
          <Title>
            <h1>404</h1>
            <h3>Page Not Found</h3>
          </Title>
          <p>여기엔 아무것도 없어요...</p>
        </Wrapper>
        <Button type='button' onClick={() => navigate('/')}>
          홈으로 돌아가기 <img src={ICONS.arrow.home} alt='arrow' />
        </Button>
        <Musseuki />
      </Container>
    </Background>
  );
}

export default NotFoundPage;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  box-shadow: 0px 4px 40px 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  color: ${({ theme }) => theme.color_textKey};

  p {
    font-size: ${({ theme }) => theme.fontSize_lg};
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 70px;
    font-weight: 900;
  }

  h3 {
    font-size: 36px;
    font-weight: 700;
  }
`;

const Musseuki = styled(Musseuk)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color_keyBlue};
  border: none;
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
  padding: 10px 50px;
  font-size: ${({ theme }) => theme.fontSize_md};
  color: ${({ theme }) => theme.color_textWhite};

  &:hover:not(:disabled) {
    opacity: 0.95;
  }

  & img {
    margin-bottom: 2px;
  }
`;
