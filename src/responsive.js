import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 36rem){//576px
            ${props}
        }
    `;
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 48rem){//768px
            ${props}
        }
    `;
}