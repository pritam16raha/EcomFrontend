import React from 'react'
import styled from 'styled-components';
import { Container, ContentStylings, Section } from '../../../styles/styles';
import BreadCrumb from '../../Common/BreadCrumb';
import { Link } from 'react-router-dom';
import ProductList from '../../product/ProductList';
import { products } from '../../../data/data';
import Title from '../../Common/Title';
import { defaultTheme } from '../../../styles/themes/default';
import ProductFilter from '../../product/ProductFilter';


const ProductListScreen = () => {

  const breadCrumbItems = [
    {label: "Home", link: "/"},
    {label: "Products", link: ""}
  ]


  return (
    <main>
      <Container>
        <BreadCrumb items={breadCrumbItems}/>
        <ProductsContent className="grid items-start">
          <ProductsContentLeft>
              <ProductFilter />
          </ProductsContentLeft>

          <ProductsContentRight>
            <div className="products-right-top flex items-center justify-between">
              <h4 className="text-xxl">Engine&apos;s Mod</h4>
              <ul className="products-right-nav flex items-center justify-end flex-wrap">
                <li>
                  <Link to="/" className="active text-lg font-semibold">New</Link>
                </li>
                <li>
                  <Link to="/" className="text-lg font-semibold">Recommended</Link>
                </li>
              </ul>
            </div>
            <ProductList products={products.slice(0, 12)}/>
          </ProductsContentRight>
        </ProductsContent>
      </Container>

      <Section>
        <Container>
          <DescriptionScreen>
            <Title titleText={"Modification that enhance your riding experience"}/>
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
                One-stop Destination to Shop Every Riding Accessories:
                Raha Enterprise.
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
      </Section>
    </main>
  )
}

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
