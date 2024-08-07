import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderMainWrapper = styled.header`
    min-height: 72px;
    box-shadow: rgba(17, 17, 26,0.05) 0 4px 16px, rgba(17, 17, 26,0.05) 0 8px 24px, rgba(17, 17, 26,0.05) 0 16px 56px;
    background-color: #d3d3d3;
    display: flex;
    align-items: center;
    position: absolute
    /* margin: auto; */

    

    .header-wrap{
        column-gap: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sidebar-toggler {
        font-size: 26px;
        margin-right: 10px;
        margin-bottom: -1px;
        display: none;
    }
`;

export const SiteBrandWrapper = styled(Link)`
    text-decoration: none;
    column-gap: 10px;

    .brand-image-wrap{
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 85px;
        }
    }

    .site-brand-text{
        font-size: 24px;
        font-weight: 600;
        margin-top: 18px;

        img{
            width: 260px;
        }
    }

    .brand-name-pic{
        img{
            margin-top: 15px;
            width: 260px;
        }
    }

    
`;

export const DropDown = styled.div`
    position: absolute;
    margin-right: 10rem;
`