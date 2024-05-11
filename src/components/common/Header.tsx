import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <h1>DevHub</h1>
      <span>데브코스 지식 공유 공간</span>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color_key};
  color: ${({ theme }) => theme.color_textWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-radius: 0 0 24px 24px;

  & h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize_base};
    font-weight: 600;
  }
`;
