import styled, { css } from "styled-components";

export const StyledW3MButtonWrapper = styled.div`
  ${({ theme: { mediaQueries } }) => css`
    width: fit-content;
    position: absolute;
    right: 75px;
    top: 19px;

    ${mediaQueries.mUp} {
      right: 0px;
      top: 23px;
    }

    & button {
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
      border: 1px solid white;
      border-radius: 24px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      text-overflow: ellipsis;
      transition: background-color 0.3s ease;
      overflow: hidden;

      &:hover {
        background-color: #333;
      }

      &:active {
        background-color: #555;
      }
    }
  `}
`;
