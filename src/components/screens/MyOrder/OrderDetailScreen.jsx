import styled from "styled-components";
import { Container } from "../../../styles/styles";

import { UserContent, UserDashboardWrapper } from "../../../styles/user";
import UserMenu from "../../user/UserMenu";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";
import { currencyFormat } from "../../../utils/helper";
import { defaultTheme } from "../../../styles/themes/default";
import BreadCrumb from "../../Common/BreadCrumb";
import { useMyAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { BackendDomain } from "../../../commonData/SummaryApi";

const OrderDetailScreen = () => {
  const { currentUser, authToken } = useMyAuth();
  const [orderData, setOrderData] = useState([]);

  const getAllOrder = async () => {
    try {
      const userId = { id: currentUser._id };
      const orderAginstUser = await fetch(
        `${BackendDomain}/ecom/getorderbyuser`,
        {
          method: "POST",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userId),
        }
      );
      const orders = await orderAginstUser.json();
      setOrderData(orders.orders);
    } catch (err) {
      console.log("Error from my order -> catch block", err);
    }
  };

  useEffect(() => {
    getAllOrder();
  }, []);

  const changeDatabaseTime = (timeIgot) => {
    const dateObject = new Date(timeIgot);
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return dateObject.toLocaleString("en-IN", options);
  };

  return (
    <OrderDetailScreenWrapper>
      <Container>
        <BreadCrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu username={currentUser.name} />
          <UserContent>
            <div className="header-bar">
              <Link to="/order" className="go-back">
                <i className="bi bi-chevron-left"></i>
              </Link>
              <Title titleText={"Order Details"} />
            </div>
            {orderData?.map((order, index) => (
              <OrderCard key={index}>
                <div className="order-header">
                  <div>
                    <h4>Order no: {order?._id}</h4>
                    <p>Placed On {changeDatabaseTime(order?.createdAt)}</p>
                  </div>
                  <div className="order-total">Total: ₹{order?.amount}</div>
                </div>
                <OrderProgress>
                  <span className="dot done">Order Placed</span>
                  <span className="dot current">{order?.status}</span>
                  <span className="dot">Shipped</span>
                  <span className="dot">Delivered</span>
                </OrderProgress>
                <MessageBox>
                  <p>
                    8 June 2023 3:40 PM -{" "}
                    <span>Your order has been successfully verified.</span>
                  </p>
                </MessageBox>
                <OrderItems>
                  {order?.items?.map((item) => (
                    <div className="item" key={item.id}>
                      <div className="img-wrap">
                        <img src={item.imgSource} alt="" />
                      </div>
                      <div className="info">
                        <h5>{item.name}</h5>
                        <p>Color: {item.color}</p>
                      </div>
                      <div className="calc">
                        <p>Qty: {item.quantity}</p>
                        <p>Price: {currencyFormat(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </OrderItems>
              </OrderCard>
            ))}
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderDetailScreenWrapper>
  );
};

export default OrderDetailScreen;

const OrderDetailScreenWrapper = styled.main`
  .header-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .go-back {
    font-size: 22px;
    color: ${defaultTheme.color_gray};
    transition: 0.3s;

    &:hover {
      color: ${defaultTheme.color_sea_green};
    }
  }
`;

const OrderCard = styled.div`
  margin-bottom: 40px;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);

  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h4 {
      font-size: 20px;
      margin-bottom: 4px;
    }
    p {
      color: ${defaultTheme.color_gray};
      font-size: 14px;
    }
  }

  .order-total {
    font-size: 18px;
    font-weight: bold;
    color: ${defaultTheme.color_outerspace};
  }
`;

const OrderProgress = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  .dot {
    font-size: 13px;
    padding: 6px 12px;
    background: #e5e7eb;
    border-radius: 16px;
    color: #555;
    font-weight: 500;
  }

  .done {
    background: #34d399;
    color: white;
  }
  .current {
    background: #f59e0b;
    color: white;
  }
`;

const MessageBox = styled.div`
  background-color: #fef3c7;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;

  p {
    font-size: 14px;
    color: #92400e;

    span {
      font-weight: bold;
      color: #78350f;
    }
  }
`;

const OrderItems = styled.div`
  .item {
    display: grid;
    grid-template-columns: 80px 1fr 1fr;
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }

    .img-wrap {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h5 {
        font-size: 16px;
        margin-bottom: 4px;
      }

      p {
        color: ${defaultTheme.color_gray};
        font-size: 14px;
      }
    }

    .calc {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 14px;
        font-weight: 500;
        color: #374151;
      }
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Order", link: "/order" },
  { label: "Order Details", link: "/order_detail" },
];
