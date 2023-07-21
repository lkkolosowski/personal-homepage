import styled, { css } from "styled-components";

export const TileWrapper = styled.div`
  height: calc(100% - 176px);
  margin-top: 16px;
  background-color: ${({ theme }) => theme.tile.background};
  border-radius: 8px;
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: auto;
  }
`;

export const StyledTile = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
  }
`;

export const TileBody = styled.div`
  color: ${({ theme }) => theme.textAlternative};
  transition: color ${({ theme }) => theme.themeAnimation};
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const IconImage = styled.img`
  display: inline-block;
  line-height: 1;
  height: 24px;
  margin-bottom: -5px;
  margin-right: 8px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 18px;
    margin-bottom: -3px;
    margin-right: 8px;
  }
`;

export const ThumbnailImage = styled.img`
  display: block;
  object-fit: cover;
  height: 160px;
  width: 100%;
  border-radius: 8px;
  transition: transform ${({ theme }) => theme.animation},
    filter ${({ theme }) => theme.animation};

  ${({ details }) =>
    details &&
    css`
      opacity: 0.5;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
    height: auto;
    aspect-ratio: 3 / 1;
  }
`;

export const ThumbnailImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    45deg,
    #444cf7 0,
    #444cf7 1px,
    #e5e5f7 0,
    #e5e5f7 50%
  );
`;

export const Content = styled.div`
  height: 100%;
  padding: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    min-height: auto;
  }
`;
