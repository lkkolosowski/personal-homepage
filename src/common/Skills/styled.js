import styled from "styled-components";
import { ReactComponent as EclipseIcon } from "../../icons/eclipse.svg";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 32px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.semiTransparentIron};
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
`;

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
