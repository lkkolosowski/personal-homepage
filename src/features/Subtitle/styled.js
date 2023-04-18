import styled from "styled-components";

export const StyledSubtitle = styled.div`
  min-height: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: normal;
  color: ${({ theme }) => theme.textAlternative};
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 8px;
  }
`;

export const Indicator = styled.span`
  display: inline-block;
  height: 16px;
  width: 8px;
  margin: 0 0 -3px 1px;
  background-color: ${({ theme }) => theme.indicator};
  transition: background-color ${({ theme }) => theme.themeAnimation};
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      background-color: transparent;
    }
    49% {
      background-color: transparent;
    }
    50% {
      background-color: ${({ theme }) => theme.tile.hover};
    }
    99% {
      background-color: ${({ theme }) => theme.tile.hover};
    }
    100% {
      background-color: transparent;
    }
  }
`;
