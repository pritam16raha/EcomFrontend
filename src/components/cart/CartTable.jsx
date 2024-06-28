import React from 'react'
import styled from 'styled-components';
import { cartItems } from '../../data/data';
import CartItem from './CartItem';

const CartTable = () => {
    const CART_TABLE_HEADS = [
        "Product Details",
        "Price",
        "Quantity",
        "Shipping",
        "Subtotal",
        "Action",
    ]



  return (
    <ScrollBarWrapper>
        <CartTableWrapper>
            <thead>
                <tr>
                    {CART_TABLE_HEADS?.map((column, index) => (
                        <th key={index} className={`bg-outerspace text-white font-semibold capitalize text-base ${
                            index === CART_TABLE_HEADS.length - 1 ? " text-center" : ""}`}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {cartItems.map((cartItem) => {
                    return <CartItem key={cartItem.id} cartItem={cartItem}/>
                })}
            </tbody>
        </CartTableWrapper>
    </ScrollBarWrapper>
  )
}

export default CartTable;

const ScrollBarWrapper = styled.div`
    
`;

const CartTableWrapper = styled.table`
    thead {
    th {
      height: 48px;
      padding-left: 16px;
      padding-right: 16px;
      letter-spacing: 0.03em;
    }
  }
`;

