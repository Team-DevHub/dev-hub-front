import styled from 'styled-components';
import { IMAGES } from '@/constants/assets';
import { useAuth } from '@/hooks/useAuth';

function Banner() {
  const { userData } = useAuth();

  return (
    <Container>
      <TitleWrapper>
        <Title>
          <strong>{userData ? userData.nickname + '님, ' : '여러분,'}</strong>{' '}
          오늘도 한단계 더 성장해볼까요?
        </Title>
      </TitleWrapper>
      <img src={IMAGES.musseuk.banner} alt='max' style={{ alignSelf: 'end' }} />
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 100px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 60px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;

  & strong {
    font-weight: 700;
  }
`;
