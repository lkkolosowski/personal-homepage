import styled from "styled-components";
import { ReactComponent as EclipseIcon } from "../../icons/eclipse.svg";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  margin-top: 32px;
  padding: 0;
  list-style: none;
  letter-spacing: 0.05em;
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;
`;

export const Eclipse = styled(EclipseIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};
  height: auto;
  margin-right: 16px;
`;
