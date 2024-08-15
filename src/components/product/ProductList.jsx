import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductDetail from "./ProductDetail";
import { BackendDomain } from "../../commonData/SummaryApi";
import { useMyAuth } from "../../store/Auth";

const ProductList = () => {
  const { authToken } = useMyAuth();

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [ loader, setLoader ] = useState(true)

  const getAllProduct = async (req, res, next) => {
    try {
      const allProduct = await fetch(
        `${BackendDomain}/ecom/product/getAll?limit=6&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );
      const productIGot = await allProduct.json();
      setProducts((prev) => [...prev, ...productIGot]);
      setLoader(false);
    } catch (err) {
      console.log("Error from catch block", err);
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

  console.log("Products I got", products);

  return (
    <ProductListWrapper className="grid">
      {products?.map((product, index) => {
        return (
          <ProductDetail key={index} product={product} id={product?._id} />
        );
      })}
      { loader && <h2>Please wait...your net is very slow!</h2>}
    </ProductListWrapper>
  );
};

export default ProductList;

const ProductListWrapper = styled.div`
  margin: auto;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;
