import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 72px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    margin: 48px 0;
  }
`;
