import React from 'react'
import styled from 'styled-components';
import { Container } from '../../../styles/styles';
import BreadCrumb from '../../Common/BreadCrumb';
import ProductPreview from '../../product/ProductPreview';
import { product_one } from '../../../data/data';
import starFill from "../../../assets/myImage/extra/fillstar.png";
import halfStar from "../../../assets/myImage/extra/star-half-icon.png";
import emptyStar from "../../../assets/myImage/extra/star-empty-icon.png";
import chat from "../../../assets/myImage/extra/chat.png"
import { Link } from 'react-router-dom';
import rightArrow from "../../../assets/myImage/extra/right_arrow.png"
import { BaseLinkGreen } from '../../../styles/button';
import { currencyFormat } from '../../../utils/helper';
import cart from "../../../assets/myImage/cart/cart.png"
import ProductDescriptionTab from '../../product/ProductDescriptionTab';
import ProductServices from "../../../../src/components/product/ProductServices";

const ProductDetailsScreen = () => {

  const breadCrumbItems = [
    {label: "Shop", link: ""},
    {label: "Bikes", link: ""},
    {label: "Engine", link: ""},
  ]

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-yellow${
      index < Math.floor(product_one.rating)? {starFill} : index + 0.5 === product_one.rating ? {halfStar} : {emptyStar}
    }`}></span>
  ));


  return (
    <DetailsScreenWrapper>
      <Container>
        <BreadCrumb items={breadCrumbItems}/>
        <DetailsContent>
          <ProductPreview previewImages={product_one.previewImages}/>
          <ProductDetailsWrapper>
            <h2 className="prod-title">{product_one.title}</h2>
              <div className="flex items-center rating-and-comments flex-wrap">
                <div className="prod-rating flex items-center">
                  {stars}
                  <span className="text-gray text-xs">{product_one.rating}</span>
                </div>
              

                <div className="prod-comments flex items-start">
                  <span className="prod-comment-icon text-gray">
                    <img className='chat' src={chat}/>
                  </span>
                  <span className="prod-comment-text text-sm text-gray">
                    {product_one.comments_count} comments
                  </span>
                </div>
              </div>

              {/* <ProductSizeWrapper>
                <div className="prod-size-top flex items-center flex-wrap">
                  <p className="text-lg font-semibold text-outerspace">Select Size</p>
                  <Link to="" className="text-lg text-gray font-medium">
                    Size Guide &nbsp;<img className='arrow' src={rightArrow}/>
                  </Link>
                </div>
                <div className="prod-size-list flex items-center">
                  {product_one.sizes.map((size, index) => (
                    <div className="prod-size-item" key={index}>
                      <input type="radio" name='size'/>
                      <span className="flex items-center justify-center font-medium text-outerspace text-sm">
                        {size}
                      </span>
                    </div>
                  ))}
                </div>
              </ProductSizeWrapper> */}

              {/* <ProductColorWrapper>
                  <div className="prod-colors-top flex items-center flex-wrap">
                    <p className="text-lg font-semibold text-outerspace">
                      Colours Available
                    </p>
                  </div>
                  <div className="prod-colors-list flex items-center">
                    {product_one?.colors?.map((color, index) => (
                      <div className="prod-colors-item" key={index}>
                        <input type="radio" name="colors" />
                        <span
                          className="prod-colorbox"
                          style={{ background: `${color}` }}
                        ></span>
                      </div>
                    ))}
                  </div>
              </ProductColorWrapper> */}
                <div className="btn-and-price flex items-center flex-wrap">
                  <BaseLinkGreen
                    to="/cart"
                    as={BaseLinkGreen}
                    className="prod-add-btn"
                  >
                    <span className="prod-add-btn-icon">
                      <img className='cart' src={cart}/>
                    </span>
                    <span className="prod-add-btn-text">Add to cart</span>
                  </BaseLinkGreen>
                  <span className="prod-price text-xl font-bold text-outerspace">
                    {currencyFormat(product_one.price)}
                  </span>
                </div>
              <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
      <ProductDescriptionTab />
      </Container>
    </DetailsScreenWrapper>
  )
}

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

    .chat{
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
    .arrow{
      height: 20px;
    }
`;

const ProductColorWrapper = styled.div`
    margin-top: 32px;
`;