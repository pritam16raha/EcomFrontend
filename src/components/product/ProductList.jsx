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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 32px;
  padding: 1.5rem 0;

  .product-card {
    position: relative;
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.1);
    }

    .product-img {
      position: relative;
      height: 250px;
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }

      .favorite-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: white;
        color: #ff3b3b;
        padding: 6px;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #fef0f0;
        }
      }

      .sale-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #ff3b3b;
        color: white;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 8px;
        border-radius: 6px;
        text-transform: uppercase;
      }

      .quick-view {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000000cc;
        color: white;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 6px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
      }

      &:hover .quick-view {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .product-info {
      padding: 1rem;
      text-align: center;

      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #222;
      }

      .price {
        font-size: 1rem;
        color: #4a4a4a;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    .product-img {
      height: 200px;
    }
  }
`;

