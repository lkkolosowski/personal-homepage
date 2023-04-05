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

export const Description = styled.p`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 4em 1fr;
`;
