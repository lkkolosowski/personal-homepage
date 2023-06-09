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

  & > svg {
    border-radius: 50%;
  }

  &:hover > svg {
    animation: shake 0.4s;
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.icon.hover};
  }

  @keyframes shake {
    20% {
      transform: rotate(13deg);
    }
    40% {
      transform: rotate(-12deg);
    }
    60% {
      transform: rotate(6deg);
    }
    80% {
      transform: rotate(-4deg);
    }
  }
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 32px;
    height: 32px;
  }
`;
