import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { products } from '../../data/data';
import ProductDetail from './ProductDetail';
import { BackendDomain } from '../../common/SummaryApi';
import { useMyAuth } from '../../store/Auth';

const ProductList = () => {

  const { authToken } = useMyAuth();

  const [ products, setProducts ] = useState([])

  const getAllProduct = async(req, res, next) => {
    try{
      const allProduct = await fetch(`${BackendDomain}/ecom/product/getAll`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        }
      })
      const productIGot = await allProduct.json();
      setProducts(productIGot);
    }catch(err){
      console.log("Error from catch block", err)
    }
  }

  useEffect(()=> {
    getAllProduct()
  },[])

  // console.log("Products I got", products)

  return (
    <ProductListWrapper className='grid'>
        {products?.map((product, index) => {
            return <ProductDetail key={index} product={product} id={product._id}/>
        })}
    </ProductListWrapper>
  )
}

export default ProductList;

const ProductListWrapper = styled.div`
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;