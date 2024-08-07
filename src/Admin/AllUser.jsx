import React, { useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi";
import { useMyAuth } from "../store/Auth";
import { Container, Section } from "../styles/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const { authToken } = useMyAuth();

  const deleteUser = async (id) => {
    try {
      const dropUser = await fetch(
        `https://ecom-backend-pritam16rahas-projects.vercel.app/ecom/deleteuser/${id}`,
        {
          method: SummaryApi.deleteUser.method,
          headers: {
            Authorization: authToken,
          },
        }
      );

      if(dropUser.ok){
        getAllUserData();
      }

      if (!dropUser.ok) {
        throw new Error("HTTP error! status: ${dropUser.status}");
      }
      const userData = await dropUser.json();
      console.log("User data after Delete", userData);
    } catch (err) {
      console.log("Error from Admin-> deleteuser", err);
    }
  };

  const getAllUserData = async (req, res, next) => {
    try {
      const adminResponse = await fetch(SummaryApi.getAllUser.url, {
        method: SummaryApi.getAllUser.method,
        headers: {
          Authorization: authToken,
        },
      });
      console.log("Data is : ", adminResponse);

      // for fetch use this line
      if (!adminResponse.ok) {
        throw new Error("HTTP error! status: ${adminResponse.status}");
      }



      const userData = await adminResponse.json();
      setUsers(userData);
      console.log("All user Data is :", userData);
    } catch (err) {
      console.log("Error from Admin->Alluser", err);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);



  return (
    <>
      <Table>
        <Container>
          <h1>Admin Users Data</h1>
          <Table>
            <thead>
              <tr>
                <TableHeader>Name:</TableHeader>
                <TableHeader>Email:</TableHeader>
                <TableHeader>Username:</TableHeader>
                <TableHeader>Role:</TableHeader>
                <TableHeader>Action:</TableHeader>
              </tr>
            </thead>
            <tbody>
              {users?.map((currentUser, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{currentUser.name}</TableCell>
                    <TableCell>{currentUser.email}</TableCell>
                    <TableCell>{currentUser.username}</TableCell>
                    <TableCell>{currentUser.role}</TableCell>
                    <TableCell>
                      {/* <button className="button" onClick={() => updateUsers(currentUser._id)}>Edit</button> */}
                      <button className="button"><Link to={`/admin/updateuser/${currentUser._id}`}>Edit</Link></button>
                      <button
                        onClick={() => deleteUser(currentUser._id)}
                        className="button"
                      >
                        Delete
                      </button>
                    </TableCell>
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

export default AllUser;

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
