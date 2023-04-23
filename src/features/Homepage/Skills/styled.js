import styled from "styled-components";

export const Icon = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 40px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 32px;
    line-height: 32px;
    font-size: 32px;
  }
`;
