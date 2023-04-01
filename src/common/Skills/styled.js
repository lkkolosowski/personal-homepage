import styled from "styled-components";
import { ReactComponent as EclipseIcon } from "../../icons/eclipse.svg";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  border-radius: 4px;
  margin-top: 72px;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 50px;
    padding: 16px;
  }
`;

export const SectionBody = styled.div`
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: 0.05em;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.semiTransparentIron};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    padding-bottom: 12px;
  }
`;

export const List = styled.ul`
  columns: 3;
  margin-top: 32px;
  margin-bottom: -8px;
  padding: 0;
  list-style: none;
  letter-spacing: 0.05em;

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
  display: flex;
  line-height: 1.4;
`;

export const Eclipse = styled(EclipseIcon)`
  width: 9px;
  height: auto;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 6px;
    margin-right: 8px;
  }
`;
