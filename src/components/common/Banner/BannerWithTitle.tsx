import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ICONS, IMAGES } from '@/constants/assets';

function BannerWithTitle({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <img src={ICONS.back} />
          뒤로 가기
        </BackButton>
        <Title>
          <strong>{title}</strong>
        </Title>
      </TitleWrapper>
      <Musseuk src={IMAGES.musseuk.max} alt='banner' />
    </Container>
  );
}

export default BannerWithTitle;

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
  margin: 20px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 60px;
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
`;
