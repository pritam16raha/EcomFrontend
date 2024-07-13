import React from 'react'
import styled from 'styled-components';
import { cartItems } from '../../data/data';
import CartItem from './CartItem';

const CartTable = ( {cart} ) => {
    // const CART_TABLE_HEADS = [
    //     "Product Details",
    //     "Price",
    //     "Quantity",
    //     "Shipping",
    //     "Subtotal",
    //     "Action",
    // ]
    console.log("cart table data",cart);

console.log(cart)

  return (
    <ScrollBarWrapper>
        <CartTableWrapper>
            <thead>
                <tr>
                    {cart?.map((column, index) => (
                        <th key={index} className={`bg-outerspace text-white font-semibold capitalize text-base ${
                            index === cart?.length - 1 ? " text-center" : ""}`}>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {cartItems.map((cart) => {
                    return <CartItem key={cart.id} cartItem={cart}/>
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

