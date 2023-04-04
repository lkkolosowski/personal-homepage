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

export const Icon = styled(GithubIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;

  & > path {
    fill: ${({ theme }) => theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 32px;
    height: 32px;
  }
`;
