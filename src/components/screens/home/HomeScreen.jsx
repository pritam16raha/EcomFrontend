import styled from "styled-components";
import Hero from "../../homePage/Hero";
import Featured from "../../homePage/Featured";
import NewArrivals from "../../homePage/NewArrivals";
import SavingZone from "../../homePage/SavingZone";
import Catalog from "../../homePage/Catalog";
import { accessories, limelightCatalog, mods } from "../../../data/data";
import Brands from "../../homePage/Brands";
import FeedBack from "../../homePage/FeedBack";
import Accessories from "../../homePage/Accessories";
import Mods from "../../homePage/Mods";
import { useMyAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { BackendDomain } from "../../../commonData/SummaryApi";
import Popup from "./Popup";

const HomeScreen = () => {
  const { authToken } = useMyAuth();

  const [products, setProducts] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  const getAllProduct = async (req, res, next) => {
    try {
      const allProduct = await fetch(`${BackendDomain}/ecom/product/getAll`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      const productIGot = await allProduct.json();
      setProducts(productIGot);
    } catch (err) {
      console.log("Error from catch block", err);
    }
  };

  useEffect(() => {
    getAllProduct();
    setShowPopup(true);
  }, []);

  console.log("Products I got", products);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <HomeScreenWrapper>
      <Hero />
      <div>
        {showPopup && (
          <Popup
            message="This is your customized message!"
            onClose={handleClosePopup}
          />
        )}
      </div>
      <Featured />
      <NewArrivals />
      <SavingZone />
      <Accessories to={"/product"} id={products.id} />
      <Mods />
      {/* <Catalog catalogTitle = {"Mods for Bike"} products = {mods}/> */}
      <Brands />
      {/* <Catalog catalogTitle = {"Ata change krte hobe"} products = {limelightCatalog}/> */}
      {/* <FeedBack /> */}
    </HomeScreenWrapper>
  );
};

export default HomeScreen;

const HomeScreenWrapper = styled.main``;
