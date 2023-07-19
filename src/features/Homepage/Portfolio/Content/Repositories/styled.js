import styled, { css } from "styled-components";

export const StyledRepositories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  ${({ hidden }) =>
    hidden &&
    css`
      visibility: hidden;
    `}
`;
