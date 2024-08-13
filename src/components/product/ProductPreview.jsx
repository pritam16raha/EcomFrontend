import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMyAuth } from '../../store/Auth';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

const ProductPreview = ({ previewImages }) => {


    const [activePreviewImage, setActivePreviewImage] = useState(
        previewImages[0]
      );
    
      const handlePreviewImageChange = (previewImage) => {
        setActivePreviewImage(previewImage);
      };
    
      return (
        <ProductPreviewWrapper className="grid items-center">
          <div className="preview-items w-full">
            {previewImages.map((previewImage, id) => {
              return (
                <div
                  className="preview-item-wrapper"
                  key={id}
                  onClick={() => handlePreviewImageChange(previewImage)}
                >
                  <div className="preview-item">
                    <img
                      src={previewImage}
                      alt=""
                      className="object-fit-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="preview-display">
            <img src={activePreviewImage} className="object-fit-cover" alt="" />
          </div>
        </ProductPreviewWrapper>
      );
    };
  
  export default ProductPreview;

  const ProductPreviewWrapper = styled.div`
  grid-template-columns: 72px auto;
  gap: 24px;

  .preview-items {
   
  }

  .preview-display{
    max-width: 40rem;
    max-height: 40rem;
    margin: auto;
  }

  .preview-item {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: ${defaultTheme.default_transition};
  }


    &:hover {
      opacity: 0.9;
      outline: 1px solid ${defaultTheme.color_gray};
    }

    &-wrapper {
      padding-top: 4px;
      padding-bottom: 4px;


    }
`

// export const getProductDetails = async (productId: string) => {
//     const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
//     return await product.json()
//   }