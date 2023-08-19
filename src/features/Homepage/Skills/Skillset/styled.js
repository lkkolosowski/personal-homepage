import styled, { css } from "styled-components";

export const Skills = styled.ul`
  position: relative;
  z-index: 120;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const Break = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    display: none;
  }
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 28px;
  height: 28px;
  margin: 2px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 26px;
    height: 26px;
  }
`;

export const styledRating = (Rating) => styled(Rating)`
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 18px;
  }
`;

export const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
  margin: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  backdrop-filter: blur(8px);
  inset: 0;
  background-color: ${({ theme }) => theme.backdrop.background}80;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: background-color ${({ theme }) => theme.themeAnimation},
    visibility ${({ theme }) => theme.animation},
    opacity ${({ theme }) => theme.animation};

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;
