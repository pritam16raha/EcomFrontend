import styled from "styled-components";
import { defaultTheme } from "./themes/default";

export const FormGridWrapper = styled.div`
    min-width: 1100px;
    margin: 60px auto;

    .form-grid-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        box-shadow: rgba(50, 50, 93, 0.15) 0 50px 100px -20px, rgba(0, 0, 0, 0.1) 0 30px 60px -30px;
        min-height: 620px;
    }

    .form-grid-left{
        overflow: hidden;
        position: relative;

        img{
            position: absolute;
            object-position: top;
            /* object-fit: cover; */
        }
    }

    .form-grid-right{
        padding: 48px;
        background-color: ${defaultTheme.color_white};
    }

    .form-submit-btn{
        width: 100%;
        height: 40px;
        margin-top: 16px;
    }

    .account-rel-text{
        margin-top: 10px;
        a{
            text-decoration: underline;
            margin-left: 8px;
        }
    }
`;

export const FormTitle = styled.div`
    margin-top: 20px;
    h3{
        font-size: 32px;
        margin-bottom: 4px;
    }
`;

export const CheckboxGroup = styled.div`
    margin-top: 20px;
    li{
        column-gap: 8px;
        margin: 4px 0;
    }
`;