import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LOGOS } from '@/constants/assets';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <img src={LOGOS.logo_no_bg} width={32} height={32} />
        <h1>DevHub</h1>
      </Logo>

      <h5>데브코스 지식 공유 공간</h5>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
  background-color: ${({ theme }) => theme.color_key};
  color: ${({ theme }) => theme.color_textWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-radius: 0 0 24px 24px;

  & h1,
  h5 {
    color: ${({ theme }) => theme.color_textWhite};
    letter-spacing: 1px;
  }
`;

const Logo = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
