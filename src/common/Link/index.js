import styled, { css } from "styled-components";

export const TextLink = styled.a`
  color: ${({ theme }) => theme.link.text};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.link.underline};
  transition: border-bottom ${({ theme }) => theme.animation},
    color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.link.hover};
    border-bottom: 1px solid ${({ theme }) => theme.link.underlineHover};
  }

  ${({ text }) =>
    text &&
    css`
      color: ${({ theme }) => theme.textPrimary};
    `};
`;

export const ButtonLink = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.text};
  border: 1px solid ${({ theme }) => theme.button.border};
  border-radius: 4px;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow.thick};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.animation},
    border-color ${({ theme }) => theme.animation};

  ${({ wide }) =>
    wide &&
    css`
      display: flex;
      width: 100%;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background-color: #80bdff;
      border-color: #80bdff;
    `};

  ${({ success }) =>
    success &&
    css`
      background-color: #6ab190;
      pointer-events: none;
      border: 1px solid #6ab190;
      animation: shake 0.4s;
      transition: box-shadow ${({ theme }) => theme.animation},
        background-color ${({ theme }) => theme.animation};

      @keyframes shake {
        20% {
          transform: rotate(7deg);
        }
        40% {
          transform: rotate(-6deg);
        }
        60% {
          transform: rotate(3deg);
        }
        80% {
          transform: rotate(-2deg);
        }
      }
    `};

  &:hover {
    box-shadow: ${({ theme }) => theme.button.hover} 0 0 0 2px;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.button.hover} 0 0 0 0,
      ${({ theme }) => theme.button.active} 0 2px 0 0 inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
  }
`;
