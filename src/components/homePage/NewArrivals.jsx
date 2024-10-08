import React, { useEffect, useState } from "react";
import { Container, Section } from "../../styles/styles";
import styled from "styled-components";
import Title from "../Common/Title";
import Slider from "react-slick";
import { newArrivalData } from "../../data/data";
import CustomNextArrow from "../Common/CustomNextArrow";
import CustomPrevArrow from "../Common/CustomPrevArrow";
import { commonCardStyle } from "../../styles/card";
import { BackendDomain } from "../../commonData/SummaryApi";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/themes/default";

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);

  const fetchImages = async () => {
    try {
      const dataIamGetting = await fetch(
        `${BackendDomain}/ecom/product/newarrival`,
        {
          method: "GET",
        }
      );

      const productDataIgot = await dataIamGetting.json();
      setImage(productDataIgot.image);
      setName(productDataIgot.name);
    } catch (err) {
      console.log("Error from catch block of new arrivals section", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // console.log("Images I got", image);
  // console.log("Name I got", name);

  return (
    <Section>
      <Container>
        <Title titleText={"New Arrival"} />
        <ArrivalSliderWrapper>
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            {image.map((img, index) => {
              return (
                <ProductCardBoxWrapper key={index} to="/product">
                  <div className="product-img">
                    <img src={img} className="object-fit-cover" />
                  </div>
                  <div className="product-info">
                    <p className="font-bold text-xxl">{name[index]}</p>
                  </div>
                </ProductCardBoxWrapper>
              );
            })}
          </Slider>
        </ArrivalSliderWrapper>
      </Container>
    </Section>
  );
};

export default NewArrivals;

const ProductCardBoxWrapper = styled(Link)`
  ${commonCardStyle}
  .product-img {
    height: 262px;
    width: 262px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const ArrivalSliderWrapper = styled.div`
  .custom-prev-arrow {
    top: 43%;
    left: -10px;

    @media (max-width: ${breakpoints.xxl}) {
      left: 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      left: 4px;
    }
  }

  .custom-next-arrow {
    top: 43%;
    right: -10px;

    @media (max-width: ${breakpoints.xxl}) {
      right: 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      right: 4px;
    }
  }
`;
