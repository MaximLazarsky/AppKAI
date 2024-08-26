import styled, {css} from "styled-components";

export const StyledWrapper = styled.div`
    ${({theme}) => css`
        position: relative;
        display: grid;
        grid-template-rows: 1fr 0fr;
        height: 100%;
        overflow: auto;
        height: 100%;
        width: 100%;
        max-width: 1259px;
        min-height: 805px;
        border: 8px ${theme.palette.light.gray.main} solid;
        border-radius: ${theme.spacing}px;
        background-color: ${theme.palette.light.black};
        font-family: 'Helvetica Neue';
        font-size: 16px;
    `}
`

export const StyledInputWrapper = styled.div<{isSmallSize?: boolean}>`
    ${({ theme, isSmallSize }) => css`
        width: 100%;
        justify-self: center;
        margin: 0px 0px 20px 0px;
        ${theme.mediaQueries.lUp} {
            width: 800px;
            margin: 0px 0px 40px 0px;
        }
        ${isSmallSize &&
        css`
            width: 100% !important;
            margin-bottom: 0px !important;
            & textarea {
                width: 100% !important;
                padding: ${theme.spacing}px 26px ${theme.spacing}px
                    ${theme.spacing}px !important;
                font-size: 14px;
            }
        `}
    `}
`

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
