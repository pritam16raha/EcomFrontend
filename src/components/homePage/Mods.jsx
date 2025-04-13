import React from "react";
import { Container, Section } from "../../styles/styles";
import Title from "../Common/Title";
import { useState } from "react";
import { BackendDomain } from "../../commonData/SummaryApi";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/themes/default";

const Mods = () => {
  const [itemImage, setItemImage] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);

  const fetchData = async () => {
    try {
      const dataIGot = await fetch(`${BackendDomain}/ecom/product/mod`, {
        method: "GET",
      });
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
        <Title titleText={"Performance kit for Bikes"} />
        <ProductListWrapper className="grid">
          {itemImage?.map((item, index) => {
            return (
              <ProductCardWrapper key={index} to="/product">
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
        </ProductListWrapper>
      </Container>
    </Section>
  );
};

export default Mods;

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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  .product-img {
    position: relative;
    height: 260px;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #f0f0f0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    button {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      border-radius: 50%;
      padding: 0.5rem 0.7rem;
      font-size: 0.9rem;
      cursor: pointer;
      z-index: 2;
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
        color: #777;
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

