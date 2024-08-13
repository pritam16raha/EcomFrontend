import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "../../styles/styles";
import { BaseLinkWhite } from "../../styles/button";
import { defaultTheme } from "../../styles/themes/default";
import CustomNextArrow from "../Common/CustomNextArrow";
import CustomPrevArrow from "../Common/CustomPrevArrow";

const SectionHeroWrapper = styled.section`
  background-color: #f2f2f2;
`;

const HeroSliderWrapper = styled.div`
  .custom-prev-arrow {
    left: 30px !important;
    background-color: ${defaultTheme.color_white};
    svg {
      color: ${defaultTheme.color_outerspace};
    }


  }

  .custom-next-arrow {
    right: 30px !important;
    background-color: ${defaultTheme.color_white};
    svg {
      color: ${defaultTheme.color_outerspace};
    }


  }
`;

const HeroSliderItemWrapper = styled.div`
  position: relative;
  height: 716px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${defaultTheme.color_black_04};
  }

  img {
    display: block;
  }
`;

const HeroSlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  z-index: 10;

  .btn {
    height: 42px;
    min-width: 120px;
    margin-top: 20px;

  }

  .container {
    max-width: 840px;
    margin-left: 0;


  }

  .hero-text-top {
    font-size: 32px;


  }

  .hero-text-large {
    font-size: 78px;
    letter-spacing: 0.315px;
    line-height: 1.2;
    margin-bottom: 20px;


  }

  .hero-text-bottom {
    font-size: 26px;
    margin-bottom: 24px;


  }

  .hero-btn {
    font-size: 18px;
    height: 46px;
    min-width: 160px;
  }
`;

const Hero2 = ({ banner2data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <SectionHeroWrapper >
      <HeroSliderWrapper>
        <Slider
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          {...settings}
        >
          <HeroSliderItemWrapper key={banner2data.id}>
                <img src={banner2data?.image[0]} className="object-fit-cover" />
                <HeroSlideContent className="flex items-center w-full h-full">
                  <Container className="container text-white">
                    <p className="hero-text-top font-bold italic">
                      {banner2data.name}
                    </p>
                    <h2 className="hero-text-large font-extrabold">
                      {banner2data.category}
                    </h2>
                    <p className="hero-text-bottom font-semibold uppercase">
                      {}
                    </p>
                    <BaseLinkWhite to={banner2data.buttonLink} className="hero-btn">
                      {}
                    </BaseLinkWhite>
                  </Container>
                </HeroSlideContent>
              </HeroSliderItemWrapper>
        </Slider>
      </HeroSliderWrapper>
    </SectionHeroWrapper>
  );
};

export default Hero2;
