import { TextLink } from "../../../../../../common/Link";
import {
  StyledTile,
  Title,
  TileBody,
  Description,
  List,
  Item,
  Image,
} from "./styled";
import { capitalizeWords } from "./utils";
import { name as fullname, nick } from "../../../../nameplate";
import { projectsData } from "../../../../projectsData";

const Tile = ({ name, description, homepage, html_url }) => (
  <StyledTile>
    <Title>
      <TextLink target={"_blank"} href={homepage || html_url}>
      <Image src={projectsData.find((x) => x.name === name).icon} alt={name} />{name !== nick ? capitalizeWords(name) : fullname}
      </TextLink>
    </Title>
    <TileBody>
      <Description>{description}</Description>
      <List>
        {homepage && (
          <Item>
            <span>Demo:</span>
            <span>
              <TextLink target={"_blank"} href={homepage}>
                https://{name}.demo
              </TextLink>
            </span>
          </Item>
        )}
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
