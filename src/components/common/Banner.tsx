import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useStore from '@/store/store';
import { ICONS, IMAGES } from '@/constants/icons';

interface BannerProps {
  hasBackBtn: boolean; // back 버튼 여부
  title?: string; // 배너 타이틀 -> 없는 경우 home
}

function Banner({ hasBackBtn, title }: BannerProps) {
  const navigate = useNavigate();
  const { user } = useStore();

  return (
    <Container>
      <TitleWrapper>
        {hasBackBtn && (
          <BackButton onClick={() => navigate(-1)}>
            <img src={ICONS.back} />
            뒤로 가기
          </BackButton>
        )}
        <Title>
          {title ? (
            <strong>{title}</strong>
          ) : (
            <>
              <strong>{user ? user.nickname + '님, ' : '여러분,'}</strong>{' '}
              오늘도 열코딩!
            </>
          )}
        </Title>
      </TitleWrapper>
      <Musseuk src={IMAGES.musseuk.banner} alt='banner' />
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  color: ${({ theme }) => theme.color_textBlack};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  margin: 20px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BackButton = styled.button`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.color_keyBlue};
  font-size: ${({ theme }) => theme.fontSize_base};
  font-weight: 500;

  svg {
    fill: ${({ theme }) => theme.color_keyBlue};
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;

  & strong {
    font-weight: 700;
  }
`;

const Musseuk = styled.img`
  align-self: flex-end;
  margin-right: 40px;
`;
