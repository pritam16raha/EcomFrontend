import { css } from "styled-components";
import { defaultTheme } from "./themes/default";

export const commonCardStyle = css`
    padding-right: 12px;
    padding-left: 12px;
    border-radius: 12px;
    cursor: pointer;

    .product-img{
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 20px;
        img{
            transition: ${defaultTheme.default_transition};
        }

        &:hover{
            img{
                scale: 1.2;
            }
        }
    }
`;