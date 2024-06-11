import { IMAGES } from '@/constants/assets';
import styled from 'styled-components';
import { ICONS } from '@/constants/assets';

function GuideBanner() {
  return (
    <Container>
      <img src={IMAGES.people} alt='max' style={{ alignSelf: 'end' }} />
      <TitleWrapper>
        <Title>
          지식을 공유하여 포인트를 얻고, <strong>명예의 전당</strong>에
          도전해보세요!
        </Title>
        <LineWrapper>
          <Line>
            <img src={ICONS.check} alt='check' />
            <p>
              지식 공유 글을 작성하면 <strong>8포인트</strong>를 얻을 수 있어요.
            </p>
          </Line>
          <Line>
            <img src={ICONS.check} alt='check' />
            <p>
              댓글로 의견을 전달하면 <strong>2포인트</strong>를 얻을 수 있어요
            </p>
          </Line>
        </LineWrapper>
      </TitleWrapper>
    </Container>
  );
}

export default GuideBanner;

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
  gap: 18px;
  padding-right: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;

  & strong {
    font-weight: 700;
    color: ${({ theme }) => theme.color_keyBlue};
  }
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-size: ${({ theme }) => theme.fontSize_base};
    strong {
      font-weight: 700;
    }
  }
`;
