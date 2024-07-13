import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { Link } from "react-router-dom";

const CartItem = ({ cart, index }) => {

  console.log(cart?.id)

  return (
    <CartTableRowWrapper key={index}>
      
    </CartTableRowWrapper>
  );
};

export default CartItem;

const CartTableRowWrapper = styled.tr`
  .cart-tbl {
    &-prod {
      grid-template-columns: 80px auto;
      column-gap: 12px;
    }

    &-qty {
      .qty-inc-btn,
      .qty-dec-btn {
        width: 24px;
        height: 24px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 2px;

        &:hover {
          border-color: ${defaultTheme.color_sea_green};
          background-color: ${defaultTheme.color_sea_green};
          color: ${defaultTheme.color_white};
        }
      }

      .qty-value {
        width: 40px;
        height: 24px;
      }
    }
  }

  .cart-prod-info {
    p {
      margin-right: 8px;
      span {
        margin-right: 4px;
      }
    }
  }

  .cart-prod-img {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 8px;
    }
`;
