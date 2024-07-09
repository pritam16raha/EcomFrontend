import React, { useState } from 'react';
import styled from 'styled-components';

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Container>
      <ImageGallery>
        {product.images.map((image, index) => (
          <Thumbnail key={index} onClick={() => setSelectedImage(image)}>
            <img src={image} alt={`Product thumbnail ${index}`} />
          </Thumbnail>
        ))}
      </ImageGallery>
      <MainImage>
        <img src={selectedImage} alt="Selected Product" />
      </MainImage>
      <Details>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Price>${product.price}</Price>
        <Category>{product.category}</Category>
      </Details>
    </Container>
  );
};

export default ProductDetails;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Thumbnail = styled.div`
  margin: 0 10px;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 2px solid #ccc;
    border-radius: 5px;
  }

  &:hover img {
    border-color: #000;
  }
`;

export const MainImage = styled.div`
  margin-bottom: 20px;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 2px solid #ccc;
    border-radius: 10px;
  }
`;

export const Details = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #666;
  }
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Category = styled.div`
  font-size: 14px;
  color: #888;
`;

