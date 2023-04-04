import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 120px;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textAlternative};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 8px;
  }
`;

export const Paragraph = styled.p`
  margin: 24px 0 56px;
  font-size: 18px;
  line-height: 1.4;
  max-width: 670px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
    margin: 12px 0 40px;
  }
`;

export const IconLink = styled.a`
  & > svg > path {
    fill: ${({ theme }) => theme.icon.background};
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.icon.hover};
  }

  & > svg {
    width: 48px;
    height: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    gap: 16px;
  }
`;
