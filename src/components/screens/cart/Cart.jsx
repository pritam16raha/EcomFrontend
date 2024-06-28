import React from "react";
import styled from "styled-components";
import { Container } from "../../../styles/styles";
import BreadCrumb from "../../Common/BreadCrumb";
import { Link } from "react-router-dom";
import CartTable from "../../cart/CartTable";
import { cartItems } from "../../../data/data";
import CartSummary from "../../cart/CartSummary";

const Cart = () => {
  const BreadCrumbItems = [
    {
      label: "Home",
      link: "/cart",
    },
    {
      label: "Add To Cart",
      link: "",
    },
  ];
  return (
    <CartPageWrapper>
      <Container>
        <BreadCrumb items={BreadCrumbItems} />
        <div className="cart-head">
          <p className="text-base text-gray">
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          <p className="text-gray text-base">
            <Link to="/signin" className="text-sea-green font-medium">
              &nbsp;Please login here.
            </Link>
          </p>
        </div>

        <CartContent className="grid items-start">
          <div className="cart-content-left">
            <CartTable cartItems={cartItems} />
          </div>
          <div className="grid cart-content-right">
            <CartSummary />
          </div>
        </CartContent>
      </Container>
    </CartPageWrapper>
  );
};

export default Cart;

const CartPageWrapper = styled.main`
  padding: 48px 0;

  .breadcrumb-nav {
    margin-bottom: 20px;
  }
`;

const CartContent = styled.div`
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  .cart-content-right {
    gap: 24px;
  }
`;
