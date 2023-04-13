import styled from "styled-components";

export const StyledTile = styled.article`
  background-color: ${({ theme }) => theme.tile.background};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.tile.border};
  padding: 50px;
  transition: border-color ${({ theme }) => theme.animation},
    background-color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 24px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
  }
`;

export const TileBody = styled.div`
  color: ${({ theme }) => theme.textAlternative};
  transition: color ${({ theme }) => theme.themeAnimation};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
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
