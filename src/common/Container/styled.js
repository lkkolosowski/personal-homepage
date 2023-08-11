import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  transition: background-color ${({ theme }) => theme.themeAnimation};
`;

export const Main = styled.main`
  position: relative;
  max-width: 1232px;
  margin: 0 auto;
  padding: 120px 16px 60px;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
    padding: 32px 16px;
  }
`;
