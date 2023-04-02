import { StyledTile, Title, TileBody } from "./styled";

export const Tile = ({ title, content }) => (
  <StyledTile>
    <Title>{title}</Title>
    <TileBody>{content}</TileBody>
  </StyledTile>
);
