import styled, { css } from 'styled-components'

export const StyledMessageTemplateItem = styled.div<{isSmallSize?: boolean}>`
    ${({ theme, color, isSmallSize }) => css`
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr;
        width: 90%;
        padding: ${theme.spacing * 3}px;
        gap: ${theme.spacing}px;
        border-radius: 16px 16px 0px 16px;
        border: 1px solid ${theme.palette.light.gray.light};
        background: ${theme.palette.light.gray.dark};
        cursor: pointer;
        &:hover {
            border-color: ${color};
            & svg {
                & path {
                    fill: ${color};
                }
            }
        }
        ${isSmallSize &&
        css`
            width: 90% !important;
            padding: ${theme.spacing * 2}px;

            & svg {
                width: 16px;
                height: 20px;
            }
        `}
        ${theme.mediaQueries.lUp} {
            width: 695px;
        }
    `}
`

export const StyledMessageTemplateText = styled.p<{isBold?: boolean, isSmallSize?: boolean}>`
    ${({ theme, isBold, isSmallSize }) => css`
        font-family: ${isBold ? 'Gilroy-Bold' : 'Gilroy-Regular'};
        font-size: 16px;
        color: ${theme.palette.light.white};
        margin: 0 !important;
        text-align: start;
        white-space: pre-wrap;
        ${isSmallSize &&
        css`
            font-size: 14px;
        `}
    `}
`

export const StyledMessageItem = styled.div<{isMine: boolean, isSmallSize?: boolean}>`
    ${({ theme, isMine, color, isSmallSize }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacing}px;
        width: 90%;
        padding: ${theme.spacing * 3}px;
        align-self: ${isMine ? 'flex-end' : 'flex-start'};
        border-radius: ${isMine ? '16px 16px 0px 16px' : '16px 16px 16px 0px'};
        background: ${isMine ? theme.palette.light.gray.main : color};
        ${theme.mediaQueries.lUp} {
            width: 695px;
        }
        ${isSmallSize &&
        css`
            width: 90% !important;
            padding: ${theme.spacing * 2}px;
        `}
    `}
`
export const StyledLoadingMessageItem = styled(StyledMessageItem)`
    ${({ theme, isSmallSize }) => css`
        width: fit-content;
        ${isSmallSize &&
        css`
            width: fit-content !important;
        `}
        ${theme.mediaQueries.lUp} {
            width: fit-content;
        }
    `}
`

export const StyledAlertIcon = styled.div<{isSmallSize?: boolean}>`
    ${({ theme, isSmallSize }) => css`
        ${theme.mediaQueries.lUp} {
            & svg {
                width: 38px;
                height: 38px;
            }
        }
        ${isSmallSize &&
        css`
            & svg {
                width: 24px;
                height: 24px;
            }
        `}
    `}
`

export const StyledCode = styled.div<{isCode?: boolean}>`
    ${({ theme, isCode }) => css`
        ${isCode &&
        css`
            position: relative;
            border: 1px solid ${theme.palette.light.gray.light};
            background: rgba(182, 191, 201, 0.4);
            border-radius: 16px;
            margin-bottom: ${theme.spacing / 2}px;
            padding: ${theme.spacing * 1.5}px;
        `}
    `}
`

export const StyledCopyButton = styled.div`
    ${() => css`
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        & svg {
            width: 18px;
            height: 20px;
        }
    `}
`