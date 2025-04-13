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

// const ProductCardBoxWrapper = styled(Link)`
//   ${commonCardStyle}
//   .product-img {
//     height: 262px;
//     width: 262px;
//   }

//   @media (max-width: ${breakpoints.sm}) {
//     padding-left: 6px;
//     padding-right: 6px;
//   }
// `;

const ProductCardBoxWrapper = styled(Link)`
  ${commonCardStyle}
  width: 280px;
  margin: 0 12px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  .product-img {
    height: 262px;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid #eaeaea;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .product-info {
    padding: 1rem;
    font-size: 1.125rem;
    color: #333;

    p {
      font-weight: 600;
      font-size: 1.1rem;
      color: #111;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 240px;
    margin: 0 8px;

    .product-img {
      height: 200px;
    }

    .product-info {
      font-size: 1rem;
    }
  }
`;


const ArrivalSliderWrapper = styled.div`
  position: relative;

  .custom-prev-arrow,
  .custom-next-arrow {
    position: absolute;
    top: 40%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .custom-prev-arrow {
    left: -18px;

    @media (max-width: ${breakpoints.xxl}) {
      left: 10px;
    }

    @media (max-width: ${breakpoints.xs}) {
      left: 0;
    }
  }

  .custom-next-arrow {
    right: -18px;

    @media (max-width: ${breakpoints.xxl}) {
      right: 10px;
    }

    @media (max-width: ${breakpoints.xs}) {
      right: 0;
    }
  }
`;

