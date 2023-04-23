import styled from "styled-components";

export const IconLink = styled.a`
  line-height: 1;

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
