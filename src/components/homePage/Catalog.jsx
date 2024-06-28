import React from 'react'
import { Container, Section } from '../../styles/styles';
import Title from '../Common/Title';
import ProductList from '../product/ProductList';

const Catalog = ({ catalogTitle, products }) => {
  return (
    <Section>
        <Container>
            <div>
                <Title titleText={catalogTitle}/>
                <ProductList products={products} />
            </div>
        </Container>
    </Section>
  )
}

export default Catalog;