// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Container } from "../styles/styles";
// import { useMyAuth } from "../store/Auth";
// import { BackendDomain } from "../commonData/SummaryApi";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const AllProduct = () => {
//   const { authToken } = useMyAuth();

//   const params = useParams();

//   const [products, setProducts] = useState([]);

//   const [page, setPage] = useState(1);

//   const [ loader, setLoader ] = useState(true)

//   const navigate = useNavigate();

//   const getAllProduct = async (req, res, next) => {
//     try {
//       const productResponse = await fetch(`${BackendDomain}/ecom/product/getAll?limit=6&page=${page}`, {
//         method: "GET",
//         headers: {
//           Authorization: authToken,
//         },
//       });
//       console.log("Products are:", productResponse);
//       if (!productResponse.ok) {
//         throw new Error("HTTP error! status: ${productResponse.status}");
//       }
//       const productData = await productResponse.json();
//       setProducts((prev) => [ ...prev, ...productData ]);
//       // console.log("All product data is", productData);
//       setLoader(false);
//     } catch (err) {
//       console.log("Error from get all user catch block", err);
//     }
//   };

//   const handleInfiniteScroll = async () => {
//     // console.log("Scroll Height " + document.documentElement.scrollHeight);
//     // console.log("Inner window height " + window.innerHeight);
//     // console.log("Scroll from top " + document.documentElement.scrollTop);
//     try {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >
//         document.documentElement.scrollHeight
//       ) {
//         setLoader(true);
//         setPage((prev) => prev + 1);
//       }
//     } catch (err) {
//       console.log(
//         "Error from catch block of handle infinte scroll section",
//         err
//       );
//     }
//   };

//   useEffect(() => {
//     getAllProduct();
//   }, [page]);

//     //this is to track the page scroll for infinite scroll
//     useEffect(() => {
//       window.addEventListener("scroll", handleInfiniteScroll);
//       return () => window.removeEventListener("scroll", handleInfiniteScroll);
//     }, []);

//   const handleDelete = async (id) => {
//     try {
//       const deleteRequest = await fetch(
//         `${BackendDomain}/ecom/product/delete/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: authToken,
//           },
//         }
//       );

//       // if(!deleteRequest.ok){
//       //   throw new Error("Product not deleted")
//       // }

//       if (deleteRequest.status === 200 || deleteRequest.ok) {
//         alert("Delete successful");
//       }
//     } catch (err) {
//       console.log("Error from delete product, catch block", err);
//     }
//   };

//   return (
//     <>
//       <Table>
//         <Container>
//           <h1>All Product Page</h1>
//           <Table>
//             <thead>
//               <tr>
//                 <TableHeader>Name: </TableHeader>
//                 <TableHeader>Price: </TableHeader>
//                 <TableHeader>Category: </TableHeader>
//                 <TableHeader>Image: </TableHeader>
//                 <TableHeader>Action: </TableHeader>
//               </tr>
//             </thead>

//             <tbody>
//               {products?.map((currentProduct, index) => {
//                 return (
//                   <TableRow key={index}>
//                     <button
//                       onClick={() =>
//                         navigate(`/singleproduct/${currentProduct._id}`)
//                       }
//                     >
//                       <TableCell>{currentProduct.name}</TableCell>
//                     </button>
//                     <TableCell>{currentProduct.price}</TableCell>
//                     <TableCell>{currentProduct.category}</TableCell>
//                     <TableCell>
//                       <div>
//                         {currentProduct.image?.map((image, index) => {
//                           return <img src={image} key={index} />;
//                         })}
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       {/* <button className="button" onClick={() => updateUsers(currentProduct._id)}>Edit</button> */}
//                       <button className="button">
//                         <Link to={`/admin/updateproduct/${currentProduct._id}`}>
//                           Edit
//                         </Link>
//                       </button>
//                       <button
//                         onClick={() => handleDelete(`${currentProduct._id}`)}
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

// export default AllProduct;

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
//   img {
//     max-width: 10rem;
//   }
// `;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMyAuth } from "../store/Auth";
import { BackendDomain } from "../commonData/SummaryApi";
import { Container } from "../styles/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AllProduct = () => {
  const { authToken } = useMyAuth();
  const navigate = useNavigate();
  const params = useParams();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  const getAllProduct = async () => {
    try {
      const res = await fetch(
        `${BackendDomain}/ecom/product/getAll?limit=6&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts((prev) => [...prev, ...data]);
      setLoader(false);
    } catch (err) {
      console.error("Fetch product error:", err);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [page]);

  useEffect(() => {
    const handleInfiniteScroll = () => {
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoader(true);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BackendDomain}/ecom/product/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });

      if (res.ok) {
        toast.success("Product deleted successfully");
        setProducts((prev) => prev.filter((p) => p._id !== id));
        getAllProduct();
      }
    } catch (err) {
      console.error("Delete product error:", err);
    }
  };

  return (
    <StyledSection>
      <Container>
        <Header>All Products</Header>
        <StyledTable>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Category</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td onClick={() => navigate(`/singleproduct/${product._id}`)}>
                  {product.name}
                </td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <ImageContainer>
                    {product.image?.map((img, idx) => (
                      <img src={img} key={idx} alt="Product" />
                    ))}
                  </ImageContainer>
                </td>
                <td>
                  <ActionButton
                    as={Link}
                    to={`/admin/updateproduct/${product._id}`}
                  >
                    Edit
                  </ActionButton>
                  <ActionButton
                    delete
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        {loader && <Loader>Loading more products...</Loader>}
      </Container>
    </StyledSection>
  );
};

export default AllProduct;


const StyledSection = styled.section`
  padding: 40px 0;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;

  thead {
    background-color: #f1f2f6;

    th {
      padding: 14px;
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      color: #2d3436;
      border-bottom: 1px solid #ccc;
    }
  }

  tbody tr {
    transition: background 0.2s ease;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  td {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #2f3640;
    cursor: default;
  }

  td:first-child {
    cursor: pointer;
    font-weight: 500;
    color: #00b894;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin: 4px;
  font-size: 13px;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: ${({ delete: del }) => (del ? "#d63031" : "#0984e3")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Loader = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;
`;
