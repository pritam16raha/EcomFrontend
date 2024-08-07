import { createContext, useContext, useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi";
import { useParams } from "react-router-dom";
import { useMyAuth } from "./Auth";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [ cart, setCart ] = useState([]);

  const [ currentProduct , setCurrentProduct ] = useState();

  const { authToken } = useMyAuth()

  const { params } = useParams();

  const getCurrentProduct = async() => {
    try{
      const singleProduct = await fetch(`https://ecom-backend-pritam16rahas-projects.vercel.app/ecom/product/getOne/${params?.id}`,{
        method: "get",
        headers: {
          Authorization: authToken,
        }
      })

      const singleProductIget = await singleProduct.json();
      console.log("Product i got", singleProductIget);
      setCurrentProduct(singleProductIget)

    }catch(err){
      console.log("Error from update product",err);
    }
  }

  useEffect(() => {
    getCurrentProduct();
  }, [])

  useEffect(() => {
    let cartItem = localStorage.getItem('My Cart Now')
    if(cartItem) setCart(JSON.parse(cartItem))
  }, [])

  return (
    <CartContext.Provider value={[ cart, setCart ]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    return useContext(CartContext);
}


