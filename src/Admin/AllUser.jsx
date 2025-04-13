// import React, { useEffect, useState } from "react";
// import SummaryApi, { BackendDomain } from "../commonData/SummaryApi";
// import { useMyAuth } from "../store/Auth";
// import { Container, Section } from "../styles/styles";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const AllUser = () => {
//   const [users, setUsers] = useState([]);

//   const { authToken } = useMyAuth();

//   const deleteUser = async (id) => {
//     try {
//       const dropUser = await fetch(`${BackendDomain}/ecom/deleteuser/${id}`, {
//         method: SummaryApi.deleteUser.method,
//         headers: {
//           Authorization: authToken,
//         },
//       });

//       if (dropUser.ok) {
//         getAllUserData();
//       }

//       if (!dropUser.ok) {
//         throw new Error("HTTP error! status: ${dropUser.status}");
//       }
//       const userData = await dropUser.json();
//       console.log("User data after Delete", userData);
//     } catch (err) {
//       console.log("Error from Admin-> deleteuser", err);
//     }
//   };

//   const getAllUserData = async (req, res, next) => {
//     try {
//       const adminResponse = await fetch(SummaryApi.getAllUser.url, {
//         method: SummaryApi.getAllUser.method,
//         headers: {
//           Authorization: authToken,
//         },
//       });
//       console.log("Data is : ", adminResponse);

//       // for fetch use this line
//       if (!adminResponse.ok) {
//         throw new Error("HTTP error! status: ${adminResponse.status}");
//       }

//       const userData = await adminResponse.json();
//       setUsers(userData);
//       console.log("All user Data is :", userData);
//     } catch (err) {
//       console.log("Error from Admin->Alluser", err);
//     }
//   };

//   useEffect(() => {
//     getAllUserData();
//   }, []);

//   return (
//     <>
//       <Table>
//         <Container>
//           <h1>Admin Users Data</h1>
//           <Table>
//             <thead>
//               <tr>
//                 <TableHeader>Name:</TableHeader>
//                 <TableHeader>Email:</TableHeader>
//                 <TableHeader>Username:</TableHeader>
//                 <TableHeader>Role:</TableHeader>
//                 <TableHeader>Action:</TableHeader>
//               </tr>
//             </thead>
//             <tbody>
//               {users?.map((currentUser, index) => {
//                 return (
//                   <TableRow key={index}>
//                     <TableCell>{currentUser.name}</TableCell>
//                     <TableCell>{currentUser.email}</TableCell>
//                     <TableCell>{currentUser.username}</TableCell>
//                     <TableCell>{currentUser.role}</TableCell>
//                     <TableCell>
//                       {/* <button className="button" onClick={() => updateUsers(currentUser._id)}>Edit</button> */}
//                       <button className="button">
//                         <Link to={`/admin/updateuser/${currentUser._id}`}>
//                           Edit
//                         </Link>
//                       </button>
//                       <button
//                         onClick={() => deleteUser(currentUser._id)}
//                         className="button"
//                       >
//                         Delete
//                       </button>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </Container>
//       </Table>
//     </>
//   );
// };

// export default AllUser;

// const Table = styled.table`
//   width: 100%;
// `;

// const TableHeader = styled.th`
//   padding: 12px;
//   background-color: #f2f2f2;
//   text-align: center;
//   border-bottom: 1px solid #ddd;
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #f9f9f9;
//   }

//   .button {
//     /* margin: 2rem; */
//     border-style: ridge;
//     border-radius: 5px;
//     padding: 5px;
//     background-color: #f2f2f2;
//   }
// `;

// const TableCell = styled.td`
//   padding: 10px 20px;
//   border-bottom: 1px solid #ddd;
// `;


import React, { useEffect, useState } from "react";
import SummaryApi, { BackendDomain } from "../commonData/SummaryApi";
import { useMyAuth } from "../store/Auth";
import { Container } from "../styles/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const { authToken } = useMyAuth();

  const deleteUser = async (id) => {
    try {
      const dropUser = await fetch(`${BackendDomain}/ecom/deleteuser/${id}`, {
        method: SummaryApi.deleteUser.method,
        headers: {
          Authorization: authToken,
        },
      });

      if (dropUser.ok) {
        toast.success("User Deleted Successfully");
        getAllUserData();
      }
    } catch (err) {
      console.log("Error from Admin-> deleteuser", err);
    }
  };

  const getAllUserData = async () => {
    try {
      const adminResponse = await fetch(SummaryApi.getAllUser.url, {
        method: SummaryApi.getAllUser.method,
        headers: {
          Authorization: authToken,
        },
      });

      if (!adminResponse.ok) {
        throw new Error(`HTTP error! status: ${adminResponse.status}`);
      }

      const userData = await adminResponse.json();
      setUsers(userData);
    } catch (err) {
      console.log("Error from Admin->Alluser", err);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <UserSection>
      <Container>
        <Title>All Registered Users</Title>
        <StyledTable>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <Tr key={index}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.username}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <ActionButton to={`/admin/updateuser/${user._id}`} edit>
                    Edit
                  </ActionButton>
                  <ActionButton onClick={() => deleteUser(user._id)}>
                    Delete
                  </ActionButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      </Container>
    </UserSection>
  );
};

export default AllUser;

const UserSection = styled.section`
  padding: 40px 0;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #2d3436;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Th = styled.th`
  padding: 16px;
  background-color: #00b894;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #2d3436;
  vertical-align: middle;
`;

const ActionButton = styled(Link).attrs((props) => ({
  as: props.to ? Link : "button",
}))`
  display: inline-block;
  margin-right: 10px;
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  background-color: ${(props) => (props.edit ? "#0984e3" : "#d63031")};
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => (props.edit ? "#74b9ff" : "#ff7675")};
  }
`;
