import { StyledTile, Title, TileBody } from "./styled";

const Tile = ({ title, content }) => (
  <StyledTile>
    <Title>{title}</Title>
    <TileBody>{content}</TileBody>
  </StyledTile>
);

export default Tile;
