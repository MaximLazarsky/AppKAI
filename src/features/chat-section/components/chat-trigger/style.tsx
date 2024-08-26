import styled, {css} from "styled-components";

export const StyledArrow = styled.span`
        ${({ theme }) => css`
        color: ${theme.palette.light.white}; 
        font-weight: 500;
        font-size: 20px;
    `}
`