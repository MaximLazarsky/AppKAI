import styled, {css} from "styled-components";

export const StyledW3MButtonWrapper = styled.div`
        ${({theme}) => css`
        width: fit-content;
        position: absolute;
        right: 75px;
        top: 19px;
        ${theme.mediaQueries.mUp} {
            right: 0px;
            top: 23px;
        }
        /* w3m-button {
            w3m-connect-button {
                background-color: #ff5722 !important; /* Кастомний колір фону */
                color: #fff !important; /* Кастомний колір тексту */
                border-radius: 8px !important; /* Кастомні закруглені краї */
                padding: 10px 20px !important; /* Кастомні відступи */
            }
        } */
        button {
            background-color: ${theme.palette.light.black} !important;
            color: ${theme.palette.light.white}; 
            border-radius: 90px;
            padding: 10px 20px; 
            border: 2px solid ${theme.palette.light.white};
            font-weight: 500;
            font-size: 20px;
            width: 209px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `}
`