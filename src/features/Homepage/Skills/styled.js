import styled from "styled-components";

export const Icon = styled.div`
  height: 36px;
  line-height: 36px;
  font-size: 36px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 32px;
    line-height: 32px;
    font-size: 32px;
  }
`;
