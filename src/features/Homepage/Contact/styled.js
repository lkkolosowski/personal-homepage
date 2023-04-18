import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  margin: 24px 0 56px;
  font-size: 18px;
  line-height: 1.4;
  max-width: 670px;
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
    margin: 12px 0 40px;
  }
`;
