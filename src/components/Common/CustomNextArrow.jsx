import { PropType } from "prop-types";
import { CustomNextArrowWrapper } from "../../styles/customSlider";
import { BsChevronRight } from "react-icons/bs";
import React from "react";

const CustomNextArrow = ({ onClick }) => {
  return (
    <CustomNextArrowWrapper className="custom-next-arrow"
    onClick={onClick}>
        <BsChevronRight />
    </CustomNextArrowWrapper>
  )
}

export default CustomNextArrow;

