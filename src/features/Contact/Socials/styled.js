import styled from "styled-components";

export const StyledSocials = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    gap: 16px;
  }
`;

export const IconLink = styled.a`
  & > svg > path {
    fill: ${({ theme }) => theme.icon.background};
    transition: ${({ theme }) => theme.animation};
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.icon.hover};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 32px;
    height: 32px;
  }
`;
