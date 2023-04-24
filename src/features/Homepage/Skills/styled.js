import styled from "styled-components";

export const Icon = styled.div`
  height: 34px;
  line-height: 34px;
  font-size: 34px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 28px;
    line-height: 28px;
    font-size: 28px;
  }
`;
