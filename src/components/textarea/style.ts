import styled, { css } from 'styled-components'

export const StyledTextAreaContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background-color: rgb(54, 64, 73);
    border-radius: 30px;
`
export const StyledTextAreaInput = styled.textarea`
    ${({ theme }) => css`
        resize: based;
        border: none;
        border: 10px solid ${theme.palette.light.gray.mainChatDarkGray};
        padding: ${theme.spacing * 1.5}px 40px ${theme.spacing * 1.5}px
            ${theme.spacing * 1.5}px;
        color: ${theme.palette.light.white};
        background-color: ${theme.palette.light.gray.mainChatDarkGray};
        font-family: Gilroy-Regular;
        font-size: 16px;
        width: 100%;
        line-height: 18px;
        border-radius: 30px;
        position: 'relative';
        min-height: 56px;
        max-height: 100px;
        ::placeholder {
            color: ${theme.palette.light.gray.normal};
            text-align: start !important;
        }
        &:hover {
            border-color: ${theme.palette.light.gray.mainChatDarkGray};
        }
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
            width: 800px;
        }
    `}
`
export const StyledIcons = styled.span<{iconPosition?: string}>`
    ${({ theme, iconPosition }) => css`
        position: absolute;
        top: 50%;
        ${iconPosition === 'left'
            ? css`
                  left: 20px;
              `
            : css`
                  right: 20px;
              `};
        transform: translateY(-50%);
        display: flex;
        gap: ${theme.spacing}px;
        z-index: 1;
    `}
`

export const StyledIcon = styled.span<{disabled?: boolean}>`
    ${({ disabled } ) => css`
        display: flex;
        align-items: center;
        justify-items: center;
        width: 24px;
        height: 24px;

        & svg {
            width: 24px;
            height: 24px;
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }
    `}
`