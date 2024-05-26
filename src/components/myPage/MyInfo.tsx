import styled from 'styled-components';
import LogoutIcon from '@/assets/icon/logout-icon.svg?react';
import DeleteAccountIcon from '@/assets/icon/delete-account-icon.svg?react';
import { useContext, useState } from 'react';
import DeleteAccountPopUp from '../popup/DeleteAccountPopUp';
import { AnimatePresence } from 'framer-motion';
import { LoginContext } from '@/provider/LoginProvider';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

function MyInfo() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { handleLogOutUser } = useContext(LoginContext);

  // 팝업 등장 시 뒷배경 스크롤 방지
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleLogOut = () => {
    handleLogOutUser();
    navigate(LOGIN_ROUTER_PATH.login);
  };

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
          <LogOutButton onClick={handleLogOut} />
          <DeleteButton onClick={() => setOpen(true)} />
        </IconContainer>
      </Container>
      <AnimatePresence>
        {open && <DeleteAccountPopUp closePopup={() => setOpen(false)} />}
      </AnimatePresence>
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

const LogOutButton = styled(LogoutIcon)`
  cursor: pointer;
`;

const DeleteButton = styled(DeleteAccountIcon)`
  cursor: pointer;
`;
