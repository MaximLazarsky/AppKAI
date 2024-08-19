import styled, {css} from "styled-components";

export const StyledMessagesWrapper = styled.div<{isSmallSize?: boolean}>`
    ${({ theme, isSmallSize }) => css`
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-end;
        margin: ${theme.spacing * 2}px;
        overflow: auto;
        padding: 0px 10px;
        ${theme.mediaQueries.mUp} {
            &::-webkit-scrollbar {
                width: 10px;
                background: inherit;
            }
            &::-webkit-scrollbar-thumb {
                background: ${theme.palette.light.gray.normal};
                border-radius: 10px;
            }
        }
        ${theme.mediaQueries.lUp} {
            margin: 48px 110px;
        }
        ${theme.mediaQueries.xxlUp} {
            margin: 48px 0px;
        }
        margin: 48px 0px;
        ${isSmallSize &&
        css`
            gap: ${theme.spacing * 2}px !important;
            margin: ${theme.spacing * 2}px !important;
        `}
    `}
`