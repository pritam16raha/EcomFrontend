import React from 'react'
import { Container, Section } from '../../styles/styles';
import styled from 'styled-components';
import Title from '../Common/Title';
import Slider from 'react-slick';
import { newArrivalData } from '../../data/data';
import CustomNextArrow from '../Common/CustomNextArrow';
import CustomPrevArrow from '../Common/CustomPrevArrow';
import { commonCardStyle } from '../../styles/card';

const NewArrivals = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    }


  return (
    <Section>
        <Container>
            <Title titleText={"New Arrival"}/>
            <ArrivalSliderWrapper>
                <Slider nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />} {...settings}>
                    {newArrivalData?.map((newArrival) => {
                        return(
                            <ProductCardBoxWrapper key={newArrival.id} >
                                <div className="product-img">
                                    <img src={newArrival.imgSource} className="object-fit-cover"/>
                                </div>
                                <div className='product-info'>
                                    <p className='font-bold text-xxl'>{newArrival.title}</p>
                                </div>
                            </ProductCardBoxWrapper>
                        )
                    })}
                </Slider>
            </ArrivalSliderWrapper>
        </Container>
    </Section>
  )
}

export default NewArrivals;

const ProductCardBoxWrapper = styled.div`
    ${commonCardStyle}
    .product-img{
        height: 262px;
        width: 262px;
    }
`;

const ArrivalSliderWrapper = styled.div`
    .custom-prev-arrow{
        top: 43%;
        left: -10px;
    }

    .custom-next-arrow{
        top: 43%;
        right: -10px;
    }
`;