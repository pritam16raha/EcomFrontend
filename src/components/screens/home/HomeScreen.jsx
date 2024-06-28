import styled from "styled-components";
import Hero from "../../homePage/Hero";
import Featured from "../../homePage/Featured";
import NewArrivals from "../../homePage/NewArrivals";
import SavingZone from "../../homePage/SavingZone";
import Catalog from "../../homePage/Catalog";
import { accessories, limelightCatalog, mods } from "../../../data/data";
import Brands from "../../homePage/Brands";
import FeedBack from "../../homePage/FeedBack";

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrivals />
      <SavingZone />
      <Catalog catalogTitle = {"Accessories for Bike"} products = {accessories}/>
      <Catalog catalogTitle = {"Mods for Bike"} products = {mods}/>
      <Brands />
      <Catalog catalogTitle = {"Ata change krte hobe"} products = {limelightCatalog}/>
      {/* <FeedBack /> */}
    </HomeScreenWrapper>
  )
}

export default HomeScreen;

const HomeScreenWrapper = styled.main``;