import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../../styles/styles";
import BreadCrumb from "../../Common/BreadCrumb";
import { Link } from "react-router-dom";
import ProductList from "../../product/ProductList";
import { products } from "../../../data/data";
import Title from "../../Common/Title";
import { defaultTheme } from "../../../styles/themes/default";
import ProductFilter from "../../product/ProductFilter";
import { BackendDomain } from "../../../commonData/SummaryApi";
import { useMyAuth } from "../../../store/Auth";
import Accessories from "../../product/Accessories";
import StreetFighter from "../../product/StreetFighter";
import NewArrival from "../../product/NewArrival";
import Tourer from "../../product/Tourer";
import Essentials from "../../product/Essentials";
import City from "../../product/City";

const ProductListScreen = () => {
  const breadCrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "" },
  ];

  const [currentCategory, setCurrentCategory] = useState("All");

  const [accessories, setAccessories] = useState("");
  const [streetFighter, setStreetFighter] = useState("");
  const [newArrival, setNewArrival] = useState("");
  const [city, setCity] = useState("");
  const [tourer, setTourer] = useState("");
  const [essentials, setEssentials] = useState("");

  const fetchProduct = async () => {
    try {
      const dataIgot = await fetch(
        `${BackendDomain}/ecom/product/productbycategory`,
        {
          method: "GET",
        }
      );
      const productData = await dataIgot.json();
      setAccessories(productData.accessories);
      setStreetFighter(productData.streetFighter);
      setNewArrival(productData.newArrival);
      setCity(productData.city);
      setTourer(productData.tourer);
      setEssentials(productData.essentials);
    } catch (err) {
      console.log("Error from productListScreen fetch product function", err);
    }
  };

  // console.log("accessories", accessories);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main>
      <Container>
        <BreadCrumb items={breadCrumbItems} />
        <ProductsContent className="items-start">
          <ProductsContentRight>
            <div className="products-right-top flex items-center justify-between">
              <h2 className="text-xxl">Categories</h2>

              <div className="templateButton">
                <button
                  className={currentCategory === "All" ? "active" : ""}
                  onClick={() => setCurrentCategory("All")}
                >
                  All
                </button>
                <button
                  className={currentCategory === "accessories" ? "active" : ""}
                  onClick={() => setCurrentCategory("accessories")}
                >
                  Accessories
                </button>
                <button
                  className={
                    currentCategory === "streetFighter" ? "active" : ""
                  }
                  onClick={() => setCurrentCategory("streetFighter")}
                >
                  Street Fighter
                </button>
                <button
                  className={currentCategory === "newArrival" ? "active" : ""}
                  onClick={() => setCurrentCategory("newArrival")}
                >
                  New Arrived
                </button>
                <button
                  className={currentCategory === "city" ? "active" : ""}
                  onClick={() => setCurrentCategory("city")}
                >
                  City
                </button>
                <button
                  className={currentCategory === "tourer" ? "active" : ""}
                  onClick={() => setCurrentCategory("tourer")}
                >
                  Tourer
                </button>
                <button
                  className={currentCategory === "essentials" ? "active" : ""}
                  onClick={() => setCurrentCategory("essentials")}
                >
                  Essentials
                </button>
              </div>
            </div>
            <div>
              {currentCategory === "All" && <ProductList />}
              {currentCategory === "accessories" && (
                <Accessories product={accessories} />
              )}
              {currentCategory === "streetFighter" && (
                <StreetFighter product={streetFighter} />
              )}
              {currentCategory === "newArrival" && (
                <NewArrival product={newArrival} />
              )}
              {currentCategory === "city" && <City product={city} />}
              {currentCategory === "tourer" && <Tourer product={tourer} />}
              {currentCategory === "essentials" && (
                <Essentials product={essentials} />
              )}
            </div>
          </ProductsContentRight>
        </ProductsContent>
      </Container>

      {/* <Section>
        <Container>
          <DescriptionScreen>
            <Title
              titleText={"Modification that enhance your riding experience"}
            />
            <ContentStylings className="text-base content-stylings">
              <h4>Re-explore Modification with Raha Enterprises</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                molestiae ex atque similique consequuntur ipsum sapiente
                inventore magni ducimus sequi nemo id, numquam officiis fugit
                pariatur esse, totam facere ullam?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur nam magnam placeat nesciunt ipsa amet, vel illo
                veritatis eligendi voluptatem!
              </p>

              <h4>
                One-stop Destination to Shop Every Riding Accessories: Raha
                Enterprise.
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                iure doloribus optio aliquid id. Quos quod delectus, dolor est
                ab exercitationem odio quae quas qui doloremque. Esse natus
                minima ratione reiciendis nostrum, quam, quisquam modi aut,
                neque hic provident dolorem.
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                laborum dolorem deserunt aperiam voluptate mollitia.
              </p>

              <Link to="/">See More</Link>
            </ContentStylings>
          </DescriptionScreen>
        </Container>
      </Section> */}
    </main>
  );
};

export default ProductListScreen;

const ProductsContent = styled.div`
  grid-template-columns: 320px auto;
  margin: 20px 0;
`;

const ProductsContentLeft = styled.div`
  border: 1px solid rgba(190, 188, 189, 0.4);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 10px 50px;
  overflow: hidden;
`;

const ProductsContentRight = styled.div`
  padding: 16px 40px;
  .products-right-top {
    margin-bottom: 40px;
  }

  .templateButton {
    margin: auto;

    button {
      min-height: 50px;
      min-width: 100px;
      margin: 10px;
      border-radius: 10px;
      background-color: #f2f2f2;
      color: #333;
      border: none;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        cursor: pointer;
        transform: scale(0.95);
        background-color: #a1cecc;
      }

      &.active {
        background-color: #a1cecc; // or any custom color: ;
        color: white;
        font-weight: 600;
        transform: scale(1);
      }
    }
  }

  .products-right-nav {
    column-gap: 16px;
    li {
      a.active {
        color: ${defaultTheme.color_purple};
      }
    }
  }

  .product-card-list {
    grid-template-columns: repeat(auto-fill, repeat(290px, auto));
  }

  .product-card {
    padding-left: 0;
    padding-right: 0;
  }
`;

const DescriptionScreen = styled.div`
  .content-stylings {
    margin-left: 32px;
  }
`;
