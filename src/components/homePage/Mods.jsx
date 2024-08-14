import React from "react";
import { Container, Section } from "../../styles/styles";
import Title from "../Common/Title";
import { useState } from "react";
import { BackendDomain } from "../../commonData/SummaryApi";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;

const ProductCardWrapper = styled(Link)`
  .product-img {
    height: 390px;
    position: relative;
  }

  img {
    border-radius: 15px;
  }
`;
