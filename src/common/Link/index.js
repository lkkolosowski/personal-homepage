import styled, { css } from "styled-components";

export const TextLink = styled.a`
  color: ${({ theme }) => theme.link.text};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.link.underline};
  transition: border-bottom ${({ theme }) => theme.themeAnimation}, color ${({ theme }) => theme.animation};

  &:hover {
    color: ${({ theme }) => theme.link.hover};
  }
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
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.animation};

  ${({ hero }) =>
    hero &&
    css`
      display: flex;
    `};

  &:hover {
    box-shadow: ${({ theme }) => theme.button.hover} 0px 0px 0px 2px;
  }

  &:active {
    box-shadow: ${({ theme }) => theme.button.active} 0px 2px 0px 0px inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
  }
`;
