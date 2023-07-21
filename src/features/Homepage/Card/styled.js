import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  perspective: 800px;
  cursor: default;

  &:hover > div {
    transform: rotateX(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
    pointer-events: none;
  }
`;

export const CardFront = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition-property: transform;
  transition-duration: 0.5s;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ background, theme }) =>
    typeof background === "string" ? background : theme.background};
`;

export const CardFrontInner = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: ${({ theme }) => theme.tile.border} 0 0 0 1px;
  display: flex;
  border-radius: 8px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation},
    box-shadow ${({ theme }) => theme.themeAnimation};

  ${({ withPadding }) =>
    withPadding &&
    css`
      padding: 9px 12px;
    `}

  ${({ brightening }) =>
    brightening &&
    css`
      background-color: ${({ theme }) => theme.card.front};
    `}
`;

export const CardBack = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  transform: rotateX(180deg);
  background-color: ${({ background, theme }) =>
    typeof background === "string" ? background : theme.background};
`;

export const CardBackInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.tile.border};
  display: flex;
  border-radius: 8px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation};

  ${({ withPadding }) =>
    withPadding &&
    css`
      padding: 0 12px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    ${({ withPadding }) =>
      withPadding &&
      css`
        padding: 0 8px;
      `}
  }

  ${({ brightening }) =>
    brightening &&
    css`
      background-color: ${({ theme }) => theme.card.back};
    `}
`;
