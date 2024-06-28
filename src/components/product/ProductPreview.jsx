import React, { useState } from 'react'
import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

const ProductPreview = ({previewImages}) => {

    const [activePreviewImage, setActivePreviewImage] = useState(previewImages[0].imgSource);

    const handlePreviewImageChange = (previewImage) => {
        setActivePreviewImage(previewImage);
    }

  return (
    <ProductPreviewWrapper className="grid items-center">
        <div className="preview-items w-full">
            {
                previewImages.map((previewImage) => {
                    return (
                        <div className="preview-item-wrapper" key={previewImage.id} onClick={() => handlePreviewImageChange(previewImage.imgSource)}>
                            <div className="preview-item">
                                <img src={previewImage.imgSource} alt='' className="object-fit-cover"/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        <div className="preview-display">
            <img src={activePreviewImage} alt="" className="object-fit-cover"/>
        </div>
    </ProductPreviewWrapper>
  )
}

export default ProductPreview;

const ProductPreviewWrapper = styled.div`
      grid-template-columns: 72px auto;
      gap: 24px;

    .preview-item {
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        transition: ${defaultTheme.default_transition};
        
    }

    .preview-item-wrapper{
        margin: 20px 0;
    }

    &:hover {
      opacity: 0.9;
      outline: 1px solid ${defaultTheme.color_gray};
    }

    &-wrapper {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .preview-display {
        height: 600px;
        overflow: hidden;
    }
`;