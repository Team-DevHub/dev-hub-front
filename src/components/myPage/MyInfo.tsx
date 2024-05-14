import styled from 'styled-components';
import LogoutIcon from '@/assets/icon/logout-icon.svg?react';
import DeleteAccountIcon from '@/assets/icon/delete-account-icon.svg?react';

function MyInfo() {
  return (
    <Wrapper>
      <h2>나의 정보</h2>
      <Container>
        <Content>
          <Info>
            <h4>이름</h4>
            <span>연하영</span>
          </Info>
          <Info>
            <h4>ID</h4>
            <span>dusgkdud7@gmail.com</span>
          </Info>
          <Info>
            <h4>PW</h4>
            <span>********</span>
          </Info>
        </Content>
        <IconContainer>
          <LogoutIcon />
          <DeleteAccountIcon />
        </IconContainer>
      </Container>
    </Wrapper>
  );
}

export default MyInfo;

const Wrapper = styled.div`
  width: 482px;
  height: 200px;
`;

const Container = styled.div`
  width: 482px;
  height: 150px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: ${({ theme }) => theme.fontSize_md};
  padding: 12px;
  display: flex;

  & h4 {
    width: 50px;
  }

  & span {
    font-weight: 500;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
`;
