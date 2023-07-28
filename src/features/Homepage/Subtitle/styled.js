import styled from "styled-components";

export const StyledSubtitle = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.font.bold};
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
      background-color: ${({ theme }) => theme.indicator};
    }
    99% {
      background-color: ${({ theme }) => theme.indicator};
    }
    100% {
      background-color: transparent;
    }
  }
`;
