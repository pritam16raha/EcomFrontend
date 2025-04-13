import React from "react";
import { Container, Section } from "../../styles/styles";
import Title from "../Common/Title";
import { useState } from "react";
import { BackendDomain } from "../../commonData/SummaryApi";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/themes/default";

const Accessories = () => {
  const [itemImage, setItemImage] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);

  const fetchData = async () => {
    try {
      const dataIGot = await fetch(
        `${BackendDomain}/ecom/product/accessories`,
        {
          method: "GET",
        }
      );
      const productDataIgot = await dataIGot.json();
      setItemImage(productDataIgot.image);
      setItemName(productDataIgot.name);
      setItemPrice(productDataIgot.price);
    } catch (err) {
      console.log("Error from the fetch data in Accessories", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Image I got", itemImage);
  // console.log("Name I got", itemName);
  // console.log("Price I got", itemPrice);

  return (
    <Section>
      <Container>
        <Title titleText={"Accessories for Bikes"} />
        <ProductListWrapper className="grid">
          {itemImage?.map((item, index) => {
            return (
              <ProductCardWrapper key={index} to={`/product`}>
                <div className="product-img">
                  <img className="object-fit-cover" src={item} />
                  <button type="button">
                    <i className="icon"></i>
                  </button>
                </div>
                <div className="product-info">
                  <p className="font-bold">{}</p>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-gray">{itemName[index]}</span>
                    <span className="text-outerspace font-bold">
                      {itemPrice[index]} rs
                    </span>
                  </div>
                </div>
              </ProductCardWrapper>
            );
          })}

          {/* {
                <ProductCardWrapper key={product.id} to="/product/details">
                <div className="product-img">
                <img className="object-fit-cover" src={product.imgSource} />
                <button type="button">
                <i className="icon"></i>
                </button>
                </div>
                <div className="product-info">
                <p className="font-bold">{product.title}</p>
                <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray">{product.brand}</span>
                <span className="text-outerspace font-bold">
                {product.price} rs
                </span>
                </div>
                </div>
                </ProductCardWrapper>
                }
                */}
        </ProductListWrapper>
      </Container>
    </Section>
  );
};

export default Accessories;

const ProductListWrapper = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  padding-top: 2rem;
`;

const ProductCardWrapper = styled(Link)`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
  }

  .product-img {
    height: 270px;
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      border-radius: 0;
    }

    &:hover img {
      transform: scale(1.05);
    }

    button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border: none;
      padding: 0.4rem 0.6rem;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1;
    }
  }

  .product-info {
    padding: 1rem;

    p {
      font-weight: 600;
      font-size: 1.1rem;
      color: #222;
      margin-bottom: 0.4rem;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text-gray {
        color: #666;
      }

      .text-outerspace {
        color: #111;
        font-weight: 700;
      }
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    .product-img {
      height: 220px;
    }

    .product-info {
      padding: 0.75rem;

      p {
        font-size: 1rem;
      }
    }
  }
`;

