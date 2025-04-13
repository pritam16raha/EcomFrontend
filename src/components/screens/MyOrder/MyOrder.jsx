import React, { useEffect, useState } from "react";
import { useMyAuth } from "../../../store/Auth";
import { Container } from "../../../styles/styles";
import styled from "styled-components";
import { BackendDomain } from "../../../commonData/SummaryApi";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { currentUser, authToken } = useMyAuth();
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
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
        setOrderData(orderIgot);
      } catch (err) {
        console.log("Error from my order fetched order section", err);
      }
    };

    fetchedOrder();
  }, [authToken]);

  const totalPages = Math.ceil(orderData.length / ordersPerPage);
  const currentOrders = orderData.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <>
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
            {currentOrders.map((orderDetails, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span>{orderDetails?.username}</span>
                </TableCell>

                <TableCell2>
                  {orderDetails?.items?.map((item, id) => (
                    <div
                      key={id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span>{item?.name}</span>
                      {item?._id && (
                        <Link
                          to={`/singleproduct/${item._id}`}
                          className="button"
                        >
                          View
                        </Link>
                      )}
                    </div>
                  ))}
                </TableCell2>

                <TableCell>
                  <span>{orderDetails.amount}</span>
                </TableCell>

                <TableCell>
                  <span>{orderDetails.status}</span>
                </TableCell>

                <TableCell>
                  {orderDetails?.items?.[0]?._id && (
                    <Link
                      to={`/singleproduct/${orderDetails.items[0]._id}`}
                      className="button"
                    >
                      View
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        <PaginationWrapper>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </PaginationWrapper>
      </Container>
    </>
  );
};

export default MyOrder;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.th`
  padding: 16px;
  background-color: #f7fafc;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  color: #333;
  border-bottom: 1px solid #e2e8f0;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  .button {
    padding: 4px 12px;
    border-radius: 6px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    font-size: 12px;
  }
`;

const TableCell = styled.td`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const TableCell2 = styled.td`
  padding: 14px 20px;
  text-align: center;
  font-size: 13px;
  color: #222;
  font-weight: 500;
  border-bottom: 1px solid #e2e8f0;

  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    background-color: #edf2f7;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 13px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  .pagination-btn {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
