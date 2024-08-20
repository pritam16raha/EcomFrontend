import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/styles";
import { useMyAuth } from "../store/Auth";
import { BackendDomain } from "../commonData/SummaryApi";
import { Link, useNavigate, useParams } from "react-router-dom";

const AllProduct = () => {
  const { authToken } = useMyAuth();

  const params = useParams();

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [ loader, setLoader ] = useState(true)

  const navigate = useNavigate();

  const getAllProduct = async (req, res, next) => {
    try {
      const productResponse = await fetch(`${BackendDomain}/ecom/product/getAll?limit=6&page=${page}`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      console.log("Products are:", productResponse);
      if (!productResponse.ok) {
        throw new Error("HTTP error! status: ${productResponse.status}");
      }
      const productData = await productResponse.json();
      setProducts((prev) => [ ...prev, ...productData ]);
      // console.log("All product data is", productData);
      setLoader(false);
    } catch (err) {
      console.log("Error from get all user catch block", err);
    }
  };

  const handleInfiniteScroll = async () => {
    // console.log("Scroll Height " + document.documentElement.scrollHeight);
    // console.log("Inner window height " + window.innerHeight);
    // console.log("Scroll from top " + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setLoader(true);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(
        "Error from catch block of handle infinte scroll section",
        err
      );
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [page]);

    //this is to track the page scroll for infinite scroll
    useEffect(() => {
      window.addEventListener("scroll", handleInfiniteScroll);
      return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

  const handleDelete = async (id) => {
    try {
      const deleteRequest = await fetch(
        `${BackendDomain}/ecom/product/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authToken,
          },
        }
      );

      // if(!deleteRequest.ok){
      //   throw new Error("Product not deleted")
      // }

      if (deleteRequest.status === 200 || deleteRequest.ok) {
        alert("Delete successful");
      }
    } catch (err) {
      console.log("Error from delete product, catch block", err);
    }
  };

  return (
    <>
      <Table>
        <Container>
          <h1>All Product Page</h1>
          <Table>
            <thead>
              <tr>
                <TableHeader>Name: </TableHeader>
                <TableHeader>Price: </TableHeader>
                <TableHeader>Category: </TableHeader>
                <TableHeader>Image: </TableHeader>
                <TableHeader>Action: </TableHeader>
              </tr>
            </thead>

            <tbody>
              {products?.map((currentProduct, index) => {
                return (
                  <TableRow key={index}>
                    <button
                      onClick={() =>
                        navigate(`/singleproduct/${currentProduct._id}`)
                      }
                    >
                      <TableCell>{currentProduct.name}</TableCell>
                    </button>
                    <TableCell>{currentProduct.price}</TableCell>
                    <TableCell>{currentProduct.category}</TableCell>
                    <TableCell>
                      <div>
                        {currentProduct.image?.map((image, index) => {
                          return <img src={image} key={index} />;
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      {/* <button className="button" onClick={() => updateUsers(currentProduct._id)}>Edit</button> */}
                      <button className="button">
                        <Link to={`/admin/updateproduct/${currentProduct._id}`}>
                          Edit
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(`${currentProduct._id}`)}
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

export default AllProduct;

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
  img {
    max-width: 10rem;
  }
`;
