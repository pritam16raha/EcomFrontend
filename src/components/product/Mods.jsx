import React from 'react'
import styled from 'styled-components';
import ProductDetail from './ProductDetail';

const Mods = ({product}) => {
  return (
    <ProductListWrapper className="grid">
    {
        product?.map((item, index) => {
            return(
                <ProductDetail product={item} key={index}/>
            )
        })
    }
</ProductListWrapper>
  )
}

export default Mods;

const ProductListWrapper = styled.div`
  margin: auto;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;