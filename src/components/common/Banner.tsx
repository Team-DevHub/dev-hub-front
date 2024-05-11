import styled from "styled-components";
import BannerMusseuk from "@/assets/image/banner-musseuk.svg?react";
import BackIcon from "@/assets/icon/back-icon.svg?react";
import { useNavigate } from "react-router-dom";

interface BannerProps {
  hasBackBtn: boolean; // back 버튼 여부
  title?: string; // 배너 타이틀 -> 없는 경우 home
}

function Banner({ hasBackBtn, title }: BannerProps) {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleWrapper>
        {hasBackBtn && (
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon />
            뒤로 가기
          </BackButton>
        )}
        <Title>
          {title ? (
            <strong>{title}</strong>
          ) : (
            <>
              <strong>지민님,</strong> 오늘도 열코딩!
            </>
          )}
        </Title>
      </TitleWrapper>
      <Musseuk />
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
  color: ${({ theme }) => theme.color_textGray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;

  & strong {
    font-weight: 700;
  }
`;

const Musseuk = styled(BannerMusseuk)`
  align-self: flex-end;
  margin-right: 40px;
`;
