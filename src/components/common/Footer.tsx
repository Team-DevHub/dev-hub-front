import styled from 'styled-components';
import LogoGray from '@/assets/logo/logo-gray.svg?react';
import { Input } from '@/styles/component';
import { ICONS } from '@/assets/icon/icons';

function Footer() {
  return (
    <FooterStyle>
      <Content>
        <RowWrapper>
          <LogoContent>
            <div className='logo'>
              <LogoGray />
              <h3>DevHub</h3>
            </div>
            <span>
              DevHub는 데브코스 수강생들이 서로 지식을 공유하고, 함께 성장하는
              공간입니다.
            </span>
          </LogoContent>
          <FeedBack>
            <span>DevHub 팀에게 소중한 피드백을 전달해주세요!</span>
            <div className='inputWrapper'>
              <Input type='text' />
              <SendIcon>
                <img src={ICONS.share} alt='send' />
              </SendIcon>
            </div>
          </FeedBack>
        </RowWrapper>
        <RowWrapper style={{ alignItems: 'start' }}>
          <div className='copyright'>
            ⓒ 2024. Team-Devhub. All rights reserved.
          </div>
          <div className='icons'>
            <a
              href='https://jimin1020.notion.site/1779fa7fc79b466db968de595bbc56b1?pvs=4'
              target='_blank'>
              <img src={ICONS.notion} alt='notion' />
            </a>
            <a href='https://github.com/Team-DevHub' target='_blank'>
              <img src={ICONS.github} alt='github' />
            </a>
          </div>
        </RowWrapper>
      </Content>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.color_bgLightGray};
  color: ${({ theme }) => theme.color_textGray};
  padding: 30px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color_textGray};
  }

  .copyright {
    font-size: ${({ theme }) => theme.fontSize_base};
  }

  .icons {
    display: flex;
    gap: 16px;
    align-items: center;
  }
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
      color: ${({ theme }) => theme.color_textGray};
    }
  }

  span {
    font-size: ${({ theme }) => theme.fontSize_base};
    line-height: 180%;
  }
`;

const FeedBack = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: ${({ theme }) => theme.fontSize_sm};
    color: ${({ theme }) => theme.color_keyBlue_light};
    margin-left: 4px;
    font-weight: 500;
  }

  .inputWrapper {
    width: fit-content;
    display: flex;
    gap: 10px;

    input {
      width: 300px;
    }
  }
`;

const SendIcon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color_keyBlue};
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.15s ease-in;

  img {
    margin-right: 2px;
  }

  &:hover {
    opacity: 1;
  }
`;
