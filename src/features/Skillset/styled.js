import styled from "styled-components";
import { ReactComponent as EclipseIcon } from "../../icons/eclipse.svg";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.tile.background};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  border-radius: 4px;
  margin-top: 72px;
  padding: 32px;
  transition: background-color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 50px;
    padding: 16px;
  }
`;

export const SectionBody = styled.div`
  color: ${({ theme }) => theme.textAlternative};
  transition: color 0.3s;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.underline};
  transition: color 0.3s, border-bottom 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    padding-bottom: 12px;
  }
`;

export const List = styled.ul`
  columns: 3;
  margin-top: 32px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    columns: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    columns: 1;
    margin-top: 12px;
  }
`;

export const Item = styled.li`
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  line-height: 1.4;
`;

export const Eclipse = styled(EclipseIcon)`
  width: 9px;
  height: calc(18px * 1.4);
  margin-right: 16px;
  & > circle {
    fill: ${({ theme }) => theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 6px;
    height: calc(14px * 1.4);
    margin-right: 8px;
  }
`;
