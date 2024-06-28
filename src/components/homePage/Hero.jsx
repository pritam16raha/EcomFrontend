import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { bannerData } from '../../data/data';
import { Container } from '../../styles/styles';
import { BaseLinkWhite } from '../../styles/button';
import { defaultTheme } from '../../styles/themes/default';
import CustomNextArrow from '../Common/CustomNextArrow';
import CustomPrevArrow from '../Common/CustomPrevArrow';

const Hero = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return (
    <SectionHeroWrapper>
        <HeroSlideWrapper>
            <Slider nextArrow={< CustomNextArrow />} prevArrow={<CustomPrevArrow/>} {...settings} >
                {bannerData?.map((banner) => {
                    return(
                        <HeroSliderItemWrapper key={banner.id}>
                            <img src={banner.imgSource} className="object-fit-cover"/>
                                <HeroSlideContent className="flex items-center w-full h-full">
                                    <Container className="container text-white">
                                        <p className="hero-text-top font-bold italic">{banner.topText}</p>
                                        <h2 className="hero-text-large font-extrabold">{banner.titleText}</h2>
                                        <p className="hero-text-bottom font-semibold uppercase">{banner.bottomText}</p>
                                        <BaseLinkWhite to={banner.buttonLink} className="hero-btn">{banner.buttonText}</BaseLinkWhite>
                                    </Container>
                            </HeroSlideContent>
                        </HeroSliderItemWrapper>
                    )
                })}
            </Slider>
        </HeroSlideWrapper>
    </SectionHeroWrapper>
  )
}

export default Hero;

const SectionHeroWrapper = styled.section`
    background-color: #f2f2f2;
`;

const HeroSlideWrapper = styled.div`
    .custom-prev-arrow {
    left: 30px !important;
    background-color: transparent;
    
    
}

    .custom-next-arrow {
    right: 30px !important;
    background-color: transparent;
}
`;

const HeroSliderItemWrapper = styled.div`
        position: relative;
        height: 700px;
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
        height: 100%;
        width: 100%;
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
            letter-spacing: 1px;
            line-height: 1.5;
            margin-bottom: 20px;
        }

        .hero-text-bottom {
            font-size: 26px;
            margin-bottom: 24px;
        }

        .hero-btn {
            font-size: 30px;
            height: 60px;
            min-width: 160px;
        }
`;

