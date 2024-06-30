import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/styles/component';
import { ICONS, IMAGES, LOGOS } from '@/constants/assets';
import OAuthButtons from '../account/OAuthButtons';
import { LOGIN_ROUTER_PATH } from '@/constants/path';

const AccountLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Root>
      <DescriptionContainer>
        <TextContainer>
          <Logo>
            <img src={LOGOS.logo_key} alt='logo' width={50} height={50} />
            <h1>DevHub</h1>
          </Logo>
          <p className='description'>
            {`DevHub는 데브코스 수강생들이 서로 지식을 공유하고,\n함께 성장하는 공간입니다!`}
          </p>
          <Button type='button' onClick={() => navigate('/')}>
            둘러보기
            <img src={ICONS.arrow.go} alt='go' />
          </Button>
        </TextContainer>
        <img src={IMAGES.musseuk.account} alt='musseuk' />
      </DescriptionContainer>
      <Wrapper>
        <CardContainer>
          <Outlet />
        </CardContainer>
        {pathname === LOGIN_ROUTER_PATH.login && <OAuthButtons />}
      </Wrapper>
    </Root>
  );
};
export default AccountLayout;

const Root = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color_keyWhite};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: ${({ theme }) => theme.color_key};
    font-weight: 900;
    font-size: 36px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  .description {
    color: ${({ theme }) => theme.color_textBlack};
    font-weight: 400;
    font-size: 22px;
    white-space: pre-line;
    line-height: 35px;
  }
`;

const CardContainer = styled.div`
  width: 508px;
  /* height: 649px; */
  background-color: ${({ theme }) => theme.color_bgWhite};
  box-shadow: 0px 4px 40px 4px #0000000a;
  border-radius: 12px;
`;

const AccountCardTitle = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color_textBlack};
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 0px;
`;

const FormRoot = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 52px 64px 30px;
`;

const InputContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin: 40px 0;
`;

const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const GotoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  a {
    color: ${({ theme }) => theme.color_key};
    font-size: ${({ theme }) => theme.fontSize_base};
    text-decoration: none;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export {
  AccountCardTitle,
  FormRoot,
  InputContainer,
  SubmitContainer,
  GotoPage,
};
