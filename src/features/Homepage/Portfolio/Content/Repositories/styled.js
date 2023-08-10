import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledRepositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    gap: 16px;
  }

  ${({ hidden }) =>
    hidden &&
    css`
      visibility: hidden;
      aspect-ratio: 1.6;
      width: 400px;
      max-width: 100%;
      overflow: hidden;
    `}
`;

export const Paragraph = styled.p`
  margin-top: 64px;
  margin-bottom: 48px;
  text-align: center;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

export const InlineLoader = styled.span`
  display: block;
  border: 3px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  border-top: 3px solid ${({ theme }) => theme.textPrimary};
  width: 27px;
  height: 27px;
  margin: 12px auto;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    border-width: 2px;
    width: 21px;
    height: 21px;
  }
`;
