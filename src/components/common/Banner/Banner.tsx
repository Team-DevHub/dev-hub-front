import styled from 'styled-components';
import useStore from '@/store/store';
import { IMAGES } from '@/constants/assets';

function Banner() {
  const { user } = useStore();

  return (
    <Container>
      <TitleWrapper>
        <Title>
          <strong>{user ? user.nickname + '님, ' : '여러분,'}</strong> 오늘도
          한단계 더 성장해볼까요?
        </Title>
      </TitleWrapper>
      <img src={IMAGES.musseuk.max} alt='max' style={{ alignSelf: 'end' }} />
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
