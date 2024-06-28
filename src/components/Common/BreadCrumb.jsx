import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';
import rightArrow from "../../assets/myImage/extra/rightArrow.png"

const BreadCrumb = ({items}) => {
  return (
    <BreadCrumbWrapper className="flex items-center flex-wrap">
        {
            items?.map((item, index) => (
                <BreadCrumbItem key={index} item={item} isLast={items.length - 1 === index}/>
            ))
        }
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb;

const BreadCrumbWrapper = styled.nav`
    margin-bottom: 24px;

    .breadcrumb-separator {
        margin-left: 8px;
        margin-right: 8px;
    }

    .breadcrumb-item {
        transition: ${defaultTheme.default_transition};
    &:hover {
        color: ${defaultTheme.color_outerspace};
    }
  }

  img{
    width: 14px;
  }
`;

const BreadCrumbItem = ({ item, isLast }) => {
    // console.log(item);
    return(
    <>
        
        <Link to={item.link} className={`breadcrumb-item text-base ${
          isLast ? "text-outerspace font-semibold" : "text-gray font-medium"
        }`} >
            {item.label}
        </Link>

        {!isLast && (
        <span className="breadcrumb-separator inline-flex text-xs">
          <img src={rightArrow}/>
        </span>
      )}
    </>
)
}