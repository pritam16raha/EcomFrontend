import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../../styles/styles";
import BreadCrumb from "../../Common/BreadCrumb";
import ProductPreview from "../../product/ProductPreview";
import { product_one } from "../../../data/data";
import starFill from "../../../assets/myImage/extra/fillstar.png";
import halfStar from "../../../assets/myImage/extra/star-half-icon.png";
import emptyStar from "../../../assets/myImage/extra/star-empty-icon.png";
import chat from "../../../assets/myImage/extra/chat.png";
import { Link, NavLink, useParams } from "react-router-dom";
import rightArrow from "../../../assets/myImage/extra/right_arrow.png";
import { BaseLinkGreen } from "../../../styles/button";
import { currencyFormat } from "../../../utils/helper";
import cart from "../../../assets/myImage/cart/cart.png";
import ProductDescriptionTab from "../../product/ProductDescriptionTab";
import ProductServices from "../../../../src/components/product/ProductServices";
import { useMyAuth } from "../../../store/Auth";
import { useCart } from "../../../store/Cart";
import { toast } from "react-toastify";
import Cart from "../cart/Cart";

const ProductDetailsScreen = () => {
  const [cart, setCart] = useCart();

  //fetching product

  const [curProduct, setCurProduct] = useState();
  //let productData;

  const params = useParams();

  const { authToken } = useMyAuth();

  const getProductInfo = async (req, res, next) => {
    try {
      const responseIgot = await fetch(
        `http://localhost:5500/ecom/product/getOne/${params.id}`,
        {
          method: "get",
          headers: {
            Authorization: authToken,
          },
        }
      );
      const productData = await responseIgot.json();
      setCurProduct(productData);
      console.log("Current Product Is: ", productData);
    } catch (err) {
      console.log("Error in fetching product data", err);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  console.log("Current product:", curProduct);

  const breadCrumbItems = [
    { label: "Shop", link: "" },
    { label: "Bikes", link: "" },
    { label: "Engine", link: "" },
  ];

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-yellow${
        index < Math.floor(product_one.rating)
          ? { starFill }
          : index + 0.5 === product_one.rating
          ? { halfStar }
          : { emptyStar }
      }`}
    ></span>
  ));

  return (
    <DetailsScreenWrapper>
      <Container>
        <BreadCrumb items={breadCrumbItems} />
        <DetailsContent>
          {/* <ProductPreview previewImages={product_one.previewImages}/> */}
          {curProduct && <ProductPreview previewImages={curProduct?.image} />}

          <ProductDetailsWrapper>
            <h2 className="prod-title">{curProduct?.name}</h2>
            <div className="flex items-center rating-and-comments flex-wrap">
              <div className="prod-rating flex items-center">
                {stars}
                <span className="text-gray text-xs">{product_one.rating}</span>
              </div>

              <div className="prod-comments flex items-start">
                <span className="prod-comment-icon text-gray">
                  <img className="chat" src={chat} />
                </span>
                <span className="prod-comment-text text-sm text-gray">
                  {product_one.comments_count} comments
                </span>
              </div>
            </div>

            <div className="btn-and-price flex items-center flex-wrap">
              <BaseLinkGreen
                onClick={() => {
                  setCart([...cart, curProduct]);
                  localStorage.setItem('My Cart Now', JSON.stringify([...cart, curProduct]))
                  toast.success("Item Added To Cart");
                }}
                // to="/cart"
                as={BaseLinkGreen}
                className="prod-add-btn"
              >
                <span className="prod-add-btn-icon">
                  <img className="cart" />
                </span>
                <span className="prod-add-btn-text">
                Add to cart
                </span>
              </BaseLinkGreen>
              <span className="prod-price text-xl font-bold text-outerspace">
                {curProduct?.price}
              </span>
            </div>
            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
        <ProductDescriptionTab />
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetailsScreen;

const DetailsScreenWrapper = styled.main`
  margin: 40px 0;
`;

const DetailsContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const ProductDetailsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-left: 6rem;

  .chat {
    height: 20px;
  }

  .prod-title {
    margin-bottom: 10px;
  }
  .rating-and-comments {
    column-gap: 16px;
    margin-bottom: 20px;
  }
  .prod-rating {
    column-gap: 10px;
  }
  .prod-comments {
    column-gap: 10px;
  }
  .prod-add-btn {
    min-width: 160px;
    column-gap: 8px;
    &-text {
      margin-top: 2px;
    }
  }
  .btn-and-price {
    margin-top: 36px;
    column-gap: 16px;
    row-gap: 10px;
  }
`;

const ProductSizeWrapper = styled.div`
  .arrow {
    height: 20px;
  }
`;

const ProductColorWrapper = styled.div`
  margin-top: 32px;
`;
