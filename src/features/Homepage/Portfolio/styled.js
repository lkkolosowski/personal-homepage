import styled from "styled-components";
import { ReactComponent as Github } from "../../../icons/github.svg";

export const IconLink = styled.a`
  display: block;
  margin-top: -5px;

  & > svg > path {
    fill: ${({ theme }) => theme.link.text};
    transition: ${({ theme }) => theme.animation};
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.link.hover};
  }
`;

export const GithubIcon = styled(Github)`
  position: relative;
  top: 5px;
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 32px;
    height: 32px;
  }
`;
