import styled from "styled-components";
import { defaultTheme } from "./themes/default";

export const PageWrapper = styled.div`
    overflow: hidden !important;
`;

export const Container = styled.div`
    max-width: 1320px;
    padding: 0 16px !important;
    margin: 0 auto;
    width: 100%;

    /* .switch{
        margin: none;
        padding: none;
        background-color: #fff;
    } */

     th{
        
     }
`;

export const Section = styled.section`
    padding: 40px 0;
`;

export const TitleWrapper = styled.div`
    margin-bottom: 24px;
    position: relative;
    padding-left: 32px;
    display: flex;
    align-items: center;

    h2 , h3 , h4{
        font-weight: 600;
        margin-bottom: 0 !important;
    }

    h3{
        font-size: 28px;
        margin-bottom: 4px;
    }

    p{
        font-size: 18px;
    }

    &::after{
        content: "";
        position: absolute;
        left: 0;
        /* top: 50%; */
        transform: translate(-50%);
        width: 6px;
        height: 30px;
        background-color: ${defaultTheme.color_sea_green};
        border-radius: 100vh;
    }
`;

export const ContentStylings = styled.div`
    color: ${defaultTheme.color_gray};
    h1, h2, h3, h4, h5, h6 {
        margin: 16px 0 12px 0;
    }

    p {
        margin: 8px 0;
    }

    a {
        color: ${defaultTheme.color_sea_green};
        font-weight: 600;
    }
`;