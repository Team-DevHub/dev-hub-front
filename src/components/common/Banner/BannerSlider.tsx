import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import Banner from './Banner';
import GuideBanner from './GuideBanner';

function BannerSlider() {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        <Banner />

        <GuideBanner />
      </StyledSlider>
    </Container>
  );
}

export default BannerSlider;

const Container = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
  color: ${({ theme }) => theme.color_textBlack};
  margin: 20px 0;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: fit-content;
  display: flex;
  border-radius: 12px;
`;
