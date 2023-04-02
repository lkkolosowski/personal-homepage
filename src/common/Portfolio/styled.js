import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../icons/github.svg";

export const StyledPortfolio = styled.section`
  margin-top: 72px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 17px;
  }
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.semiTransparentIron};

  &:hover {
    color: ${({ theme }) => theme.color.dodgerBlue};
  }
`;

export const Icon = styled(GithubIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 32px;
    height: 32px;
  }
`;
