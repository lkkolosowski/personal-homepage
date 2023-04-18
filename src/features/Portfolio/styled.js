import styled from "styled-components";

export const StyledPortfolio = styled.section`
  margin: 72px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    margin: 48px 0;
  }
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
  transition: color ${({ theme }) => theme.themeAnimation};

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
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 17px;
  }
`;

export const IconLink = styled.a`
  & > svg > path {
    fill: ${({ theme }) => theme.link.text};
    transition: ${({ theme }) => theme.animation};
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.link.hover};
  }

  & > svg {
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
      width: 32px;
      height: 32px;
    }
  }
`;