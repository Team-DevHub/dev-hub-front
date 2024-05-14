import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MusseukSVG from '@/assets/image/account-musseuk.svg?react';

const AccountLayout = () => {
  return (
    <Root>
      <DescriptionContainer>
        <span className='title'>{'DevHub'}</span>
        <p className='description'>
          {`DevHub는 데브코스 수강생들이 서로 지식을 공유하고,\n함께 성장하는 공간입니다!`}
        </p>
        <MusseukSVG />
      </DescriptionContainer>
      <CardContainer>
        <Outlet />
      </CardContainer>
    </Root>
  );
};
export default AccountLayout;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color_keyWhite};
`;

const DescriptionContainer = styled.div`
  .title {
    display: inline-block;
    color: ${({ theme }) => theme.color_key};
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 24px;
  }

  .description {
    color: ${({ theme }) => theme.color_textBlack};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 66px;
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
  margin-bottom: 24px;
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

export {
  AccountCardTitle,
  FormRoot,
  InputContainer,
  SubmitContainer,
  GotoPage,
};
