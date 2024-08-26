import styled, {css} from "styled-components";

export const StyledButton = styled.div`
        ${({ theme }) => css`
        background-color: ${theme.palette.light.black};
        color: ${theme.palette.light.white}; 
        border-radius: 90px;
        border: 2px solid ${theme.palette.light.white};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px; 
        width: 168px;
        height: 48px;
        font-weight: 500;
        font-size: 16px;
        ${theme.mediaQueries.mUp} {
            padding: 10px 20px; 
            width: 209px;
            height: 64px;
            font-weight: 500;
            font-size: 20px;
        }
    `}
`