import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s;
`;

export const Main = styled.main`
  position: relative;
  max-width: 1248px;
  margin: 0 auto;
  padding: 120px 16px;
`;
