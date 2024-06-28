import { ArrowDropDown, DetailsOutlined, DetailsRounded } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetail = ({ product }) => {
  return (
    <ProductCardWrapper key={product.id} to="/product/details">
        <div className='product-img'>
            <img className='object-fit-cover' src={product.imgSource}/>
            <button type='button'>
                <i className='icon'></i>
            </button>
        </div>
        <div className='product-info'>
            <p className='font-bold'>{product.title}</p>
            <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray">{product.brand}</span>
                <span className="text-outerspace font-bold">{product.price} rs</span>
            </div>
        </div>
    </ProductCardWrapper>
  )
}

export default ProductDetail;

const ProductCardWrapper = styled(Link)`
    .product-img{
      height: 390px;
      position: relative;
    }

    img{
      border-radius: 15px;
    }
`;