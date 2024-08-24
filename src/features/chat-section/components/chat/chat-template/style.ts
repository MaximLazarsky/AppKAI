import styled, { css } from "styled-components";

export const ChatTemplateContainer = styled.div`
  ${({ theme: { spacing } }) =>
    css`
      display: flex;
      flex-direction: column;
      max-width: 969px;
      margin: 0 auto;
      padding: 0px ${spacing * 1.25}px;
    `}
`;

export const ChatTemplateHeader = styled.div`
  ${() =>
    css`
      height: 50px;
    `}
`;

export const ChatWelcomeMessage = styled.div`
  ${() => css`
    flex: 1;
    align-content: center;
    max-width: 969px;
    margin: 0 auto;
  `}
`;

export const WelcomeMessageTitle = styled.h1`
  ${({ theme: { mediaQueries } }) => css`
    font-family: Helvetica Neue;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.42px;
    letter-spacing: -0.01em;
    text-align: left;
    ${mediaQueries.m} {
      font-size: 16px;
    }
  `}
`;

export const WelcomeMessageDescription = styled.h2`
  ${({ theme: { mediaQueries } }) => css`
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    color: #686868;
    ${mediaQueries.m} {
      font-size: 12px;
    }
  `}
`;
export const SuggestedQuestions = styled.div`
  ${({ theme: { spacing } }) =>
    css`
      display: flex;
      flex-direction: column;
      text-align: end;
      flex: 1;
      gap: ${spacing * 2.5}px;
      place-content: center;
      max-width: 969px;
      margin: 0 auto;
      width: 100%;
    `}
`;

export const SuggestedQuestionsTitle = styled.h1`
  ${({ theme: { mediaQueries } }) => css`
    font-family: Helvetica Neue;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.42px;
    letter-spacing: -0.01em;
    text-align: right;
    ${mediaQueries.m} {
      font-size: 14px;
    }
  `}
`;

export const SuggestedQuestionsList = styled.div`
  ${({ theme: { spacing } }) =>
    css`
      display: flex;
      flex-direction: column;
      gap: ${spacing * 1.5}px;
    `}
`;
export const SuggestedQuestion = styled.div`
  ${({ theme: { mediaQueries, spacing } }) => css`
    cursor: pointer;
    height: 60px;
    padding: ${spacing * 2}px ${spacing * 4}px;
    border-style: solid;
    border-color: #111111a6;
    border-radius: 16px;
    width: auto;
    align-self: self-end;
    transition: border-color 0.5s;
    &:hover {
      border-color: white;
    }
    ${mediaQueries.m} {
      font-size: 12px;
      padding: ${spacing * 1.5}px ${spacing * 2}px;
      height: auto;
    }
  `}
`;
