import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: ${({ theme }) => theme.font.black};
  line-height: 1.2;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.regular};
  line-height: 1.4;
  text-align: center;
  margin-bottom: 24px;
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 17px;
  }
`;

export const Icon = styled.div`
  line-height: 1;
  font-size: 34px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 28px;
  }
`;