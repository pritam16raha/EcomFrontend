import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../../styles/styles";
import BreadCrumb from "../../Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import CartTable from "../../cart/CartTable";
import { cartItems } from "../../../data/data";
import CartSummary from "../../cart/CartSummary";
import { useCart } from "../../../store/Cart";
import { useMyAuth } from "../../../store/Auth";
import { defaultTheme } from "../../../styles/themes/default";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { BaseButtonGreen } from "../../../styles/button";
import DropIn from "braintree-web-drop-in-react";
import { toast } from "react-toastify";

//const KEY = "pk_test_51OmBgjSCPxF1ZilcksoW7uqBBzSwsDNZxEtkadAGZPrvygPBXVQYYl9MdcBJ6JoPOqEnCmkj76oXOEOZIQPPTiXI00ZKVnOWwD"

const Cart = (product) => {
  // const{ name, price, category, description, image } = product
  const [cart, setCart] = useCart();

  const [url, setUrl] = useState();

  const [cartTotal, setCartTotal] = useState();

  const { currentUser, authToken } = useMyAuth();

  console.log("Current user is", currentUser);

  console.log("current cart product", cart);

  const [quantity, setQuantity] = useState(1);

  const [accessToken, setAccessToken] = useState("");

  const [instance, setInstance] = useState(null);

  const [loading, setLoading] = useState(false);

  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  //total price
  const calculatePrice = () => {
    let total = 0;
    try {
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setCartTotal(calculatePrice());
  }, [calculatePrice]);

  console.log("Cart total is", cartTotal);

  //delete cart product
  const removeProduct = (pid) => {
    try {
      let cartNow = [...cart];
      let index = cartNow.findIndex((item) => item._id === pid);
      cartNow.splice(index, 1);
      setCart(cartNow);
      localStorage.setItem("My Cart Now", JSON.stringify(cartNow));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(currentUser)

  const navigate = useNavigate();

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

  //get payment gateway token
  // const getToken = async () => {
  //   try {
  //     const data = await fetch("http://localhost:5500/ecom/braintree/token", {
  //       method: "GET",
  //       headers: {
  //         Authorization: authToken,
  //       },
  //     });
  //     const responseData = await data.json();
  //     setAccessToken(responseData?.accessToken);
  //   } catch (err) {
  //     console.log("Error from cart page - getToken function", err);
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  const handlePayment = async () => {
    try {
      const { _id } = currentUser;
      console.log("user id is", _id);
      const data = await fetch("http://localhost:5500/ecom/orderplace", {
        method: "POST",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id, cart, cartTotal }),
      });

      const response = await data.json();
      console.log("Response after payment", response);
      if (response.success) {
        window.location.href = response.session_url;
      } else {
        console.error("Payment failed or was not successful");
      }
      // const result = response.redirectToCheckout({
        
      // });

      if (data.status === 200 || data.ok) {
        toast.success(response.message);
      }

      // if (result.error) {
      //   console.log(result.error);
      // }
    } catch (err) {
      console.log("Error from cart page -> handle payment catch block", err);
    }
  };

  return (
    <CartPageWrapper>
      <Container>
        <BreadCrumb items={BreadCrumbItems} />
        <h1>
          {`Hello ${currentUser?.name}`} {}
        </h1>
        {/* <h2>{
            cart?.map((product, index) => { return ( <h2 key={index}>{product.price}</h2> ) })
          }</h2> */}
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

        {cart?.map((cartItem, id) => {
          return (
            <CartContent className="grid items-start" key={id}>
              <div className="cart-content-left">
                <CartTableRowWrapper>
                  <td>
                    <div className="cart-tbl-prod grid">
                      <div className="cart-prod-img">
                        <div>
                          {cartItem?.image?.map((cartImage, index) => {
                            return (
                              <img
                                src={cartImage}
                                key={index}
                                className="object-fit-cover"
                                alt=""
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="cart-prod-info">
                        <h4 className="text-base">{cartItem?.name}</h4>
                        <p className="text-sm text-gray inline-flex">
                          <span className="font-semibold">Category: </span>{" "}
                          {cartItem.category}
                        </p>
                        <p className="text-sm text-gray inline-flex">
                          <span className="font-semibold">Description: </span>
                          {cartItem.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-lg font-bold text-outerspace">
                      ${cartItem.price}
                    </span>
                  </td>
                  <td>
                    <div className="cart-tbl-qty flex items-center">
                      <button
                        className="qty-dec-btn"
                        onClick={decreaseQuantity}
                      >
                        <RemoveIcon />
                      </button>
                      <input
                        readOnly
                        value={quantity}
                        type="number"
                        className="qty-value inline-flex items-center justify-center font-medium text-outerspace"
                      />
                      <button
                        className="qty-inc-btn"
                        onClick={increaseQuantity}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </td>
                  <td>
                    <span className="cart-tbl-shipping uppercase text-silver font-bold">
                      {"cartItem.shipping" === 0 ? "Free" : "cartItem.shipping"}
                    </span>
                  </td>
                  <td>
                    <span className="text-lg font-bold text-outerspace">
                      ${cartItem.price * cartItem.quantity}
                    </span>
                  </td>
                  <td>
                    <div className="cart-tbl-actions flex justify-center">
                      <Link className="tbl-del-action text-red">
                        <Button onClick={() => removeProduct(cartItem._id)}>
                          <DeleteIcon />
                        </Button>
                      </Link>
                    </div>
                  </td>
                </CartTableRowWrapper>
              </div>
            </CartContent>
          );
        })}

        <CartSummaryWrapper>
          <div className="grid">
            <ul className="summary-list">
              <li className="summary-item flex justify-between">
                <span className="font-medium text-outerspace">Sub Total</span>
                <span className="font-medium text-outerspace"></span>
              </li>
              <li className="summary-item flex justify-between">
                <span className="font-medium text-outerspace">Shipping</span>
                <span className="font-medium text-outerspace"></span>
              </li>
              <li className="summary-item flex justify-between">
                <span className="font-medium text-outerspace">Grand Total</span>
                <span className="summary-item-value font-bold text-outerspace">
                  {calculatePrice()}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div>
              {!accessToken ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: accessToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                </>
              )}
              <BaseButtonGreen className="w-full" onClick={handlePayment}>
                Buy
              </BaseButtonGreen>
            </div>
          </div>
        </CartSummaryWrapper>
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

const CartSummaryWrapper = styled.div`
  background-color: ${defaultTheme.color_flash_white};
  padding: 16px;

  .checkout-btn {
    min-width: 100%;
  }

  .summary-list {
    padding: 20px;

    .summary-item {
      margin: 6px 0;

      &:last-child {
        margin-top: 20px;
        border-top: 1px dashed ${defaultTheme.color_sea_green};
        padding-top: 10px;
      }
    }
  }
`;
