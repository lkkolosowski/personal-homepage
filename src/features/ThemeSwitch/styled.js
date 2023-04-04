import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 16px;
`;

export const StyledThemeSwitch = styled.button`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textAlternative};
`;
