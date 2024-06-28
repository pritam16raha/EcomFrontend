import React from 'react'
import { CustomPrevArrowWrapper } from '../../styles/customSlider';
import { BsChevronLeft } from 'react-icons/bs';

const CustomPrevArrow = ({onClick}) => {
  return (
    <CustomPrevArrowWrapper className='custom-prev-arrow' onClick={onClick}>
      <BsChevronLeft />
    </CustomPrevArrowWrapper>
  )
}

export default CustomPrevArrow;