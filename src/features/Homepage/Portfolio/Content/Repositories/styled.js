import styled, { css } from "styled-components";

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
    `}
`;

export const Repository = styled.div`
  width: calc((100% / 3) - (((3 - 1) / 3) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2 - 1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;
