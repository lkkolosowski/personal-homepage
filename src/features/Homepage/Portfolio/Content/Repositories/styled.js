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
