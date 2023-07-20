import styled from "styled-components";

export const TileWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.tile.background};
  border-radius: 8px;
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
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

export const Thumbnail = styled.a`
  overflow: hidden;
  display: block;
  aspect-ratio: 3 / 1;
`;

export const ThumbnailImage = styled.img`
  display: block;
  object-fit: cover;
  aspect-ratio: 3 / 1;
  width: 100%;
  border-radius: 8px;
  transform: scale(1.05);
  filter: opacity(0.9);
  transition: transform ${({ theme }) => theme.animation},
    filter ${({ theme }) => theme.animation};

  &:hover {
    transform: scale(1.01);
    filter: opacity(0.8);
  }
`;

export const Content = styled.div`
  padding: 25px;
`;
