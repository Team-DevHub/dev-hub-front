import styled from 'styled-components';
import LogoGray from '@/assets/logo/logo-gray.svg?react';
import { ICONS } from '@/assets/icon/icons';
import FeedBackInput from './FeedBackInput';

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
          <FeedBackInput />
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
