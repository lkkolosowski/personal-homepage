import { TextLink } from "../../../../../common/Link";
import {
  StyledTile,
  Title,
  TileBody,
  Description,
  List,
  Item,
} from "./styled";
import { capitalizeWords } from "./utils";

const Tile = ({ name, description, homepage, html_url }) => (
  <StyledTile>
    <Title>
      <TextLink target={"_blank"} href={homepage}>
        {capitalizeWords(name)}
      </TextLink>
    </Title>
    <TileBody>
      <Description>{description}</Description>
      <List>
        <Item>
          <span>Demo:</span>
          <span>
            <TextLink target={"_blank"} href={homepage}>
              https://{name}.demo
            </TextLink>
          </span>
        </Item>
        <Item>
          <span>Code:</span>
          <span>
            <TextLink target={"_blank"} href={html_url}>
              https://{name}.code
            </TextLink>
          </span>
        </Item>
      </List>
    </TileBody>
  </StyledTile>
);

export default Tile;
