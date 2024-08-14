import React, { useEffect, useState } from "react";
import { useMyAuth } from "../../../store/Auth";
import { Container } from "../../../styles/styles";
import styled from "styled-components";
import { BackendDomain } from "../../../commonData/SummaryApi";

const MyOrder = () => {
  const { currentUser, authToken } = useMyAuth();
  const [orderData, setOrderData] = useState([]);
  const [orderUser, setOrderUser] = useState([]);

  try {
    const fetchedOrder = async () => {
      try {
        const response = await fetch(`${BackendDomain}/ecom/getallorder`, {
          method: "GET",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        });

        const orderIgot = await response.json();
        console.log("Response order received", orderIgot);
        setOrderData(orderIgot);
      } catch (err) {
        console.log("Error from my order fetched order section", err);
      }
    };

    console.log("Order data is", orderData);

    useEffect(() => {
      fetchedOrder();
    }, []);
  } catch (err) {
    console.log("Error from my order page catch block", err);
  }

  return (
    <>
      <Table>
        <Container>
          <h1>Admin Order Section Page</h1>
          <Table>
            <thead>
              <tr>
                <TableHeader>Username:</TableHeader>
                <TableHeader>Order Items:</TableHeader>
                <TableHeader>Order Amount:</TableHeader>
                <TableHeader>Payment Status</TableHeader>
                <TableHeader>Action:</TableHeader>
              </tr>
            </thead>

            <tbody>
              {orderData?.map((orderDetails, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{orderDetails?.username}</TableCell>

                    {/* Order Items */}
                    {orderDetails?.items?.map((item, id) => {
                      return <TableCell2 key={id}>{item?.name}</TableCell2>;
                    })}

                    {/* Order Amount */}
                    <TableCell>{orderDetails.amount}</TableCell>

                    {/* Payment Status */}
                    <TableCell>{orderDetails.status}</TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Table>
    </>
  );
};

export default MyOrder;

const Table = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #f2f2f2;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  .button {
    /* margin: 2rem; */
    border-style: ridge;
    border-radius: 5px;
    padding: 5px;
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const TableCell2 = styled.td`
  display: grid;
  justify-content: center;
  font-weight: bold;
`;
