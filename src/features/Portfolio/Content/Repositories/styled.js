import styled from "styled-components";

export const StyledRepositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
