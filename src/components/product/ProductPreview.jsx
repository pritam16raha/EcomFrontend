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
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 24px;
  align-items: flex-start;

  .preview-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 420px;
    overflow-y: auto;
    padding-right: 4px;
  }

  .preview-item-wrapper {
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 10px;
    transition: border 0.3s ease;

    &.active .preview-item {
      outline: 2px solid ${defaultTheme.color_primary};
    }

    &:hover .preview-item {
      transform: scale(1.05);
      outline: 2px solid ${defaultTheme.color_gray};
    }
  }

  .preview-item {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 8px;
    }
  }

  .preview-display {
    max-width: 40rem;
    max-height: 40rem;
    margin: auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 16px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .preview-items {
      flex-direction: row;
      justify-content: center;
      overflow-x: auto;
      max-height: unset;
    }

    .preview-display {
      margin-top: 20px;
      max-width: 100%;
    }
  }
`;
