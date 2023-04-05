import styled from "styled-components";

export const StyledTile = styled.article`
  background-color: ${({ theme }) => theme.tile.background};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.tile.border};
  padding: 50px;
  transition: border-color ${({ theme }) => theme.animation}, background-color ${({ theme }) => theme.themeAnimation};

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
