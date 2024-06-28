import React from 'react'
import styled from 'styled-components';
import { products } from '../../data/data';
import ProductItem from './ProductDetail';

const ProductList = () => {
  return (
    <ProductListWrapper className='grid'>
        {products?.map((product) => {
            return <ProductItem key={product.id} product={product}/>
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