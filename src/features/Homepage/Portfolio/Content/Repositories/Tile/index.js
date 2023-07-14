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
import websiteIcon from "../../../../../../images/website.png";

const Tile = ({ name, description, homepage, html_url }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = websiteIcon;
  };

  return (
    <StyledTile>
      <Title>
        <TextLink target={"_blank"} href={homepage || html_url}>
          <Image
            src={`https://lkkolosowski.github.io/${name}/icon128.png`}
            alt={name}
            onError={imageOnErrorHandler}
          />
          {name !== nick ? capitalizeWords(name) : fullname}
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
};

export default Tile;
