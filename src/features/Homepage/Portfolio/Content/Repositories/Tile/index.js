import { TextLink } from "../../../../../../common/Link";
import {
  StyledTile,
  Title,
  TileBody,
  Description,
  List,
  Item,
  IconImage,
  Content,
  Thumbnail,
  ThumbnailImage,
  TileWrapper,
} from "./styled";
import { capitalizeWords } from "./utils";
import { name as fullname, nick, projects } from "../../../../nameplate";
import websiteIcon from "../../../../../../images/website.png";
import placeholderImage from "../../../../../../images/placeholderImage.svg";

const Tile = ({ name, description, homepage, html_url }) => {
  const imageOnErrorHandler = (event) => {
    event.currentTarget.src = websiteIcon;
  };

  return (
    <TileWrapper>
      <StyledTile>
        <Thumbnail target={"_blank"} href={homepage || html_url}>
          <ThumbnailImage
            src={
              projects.find((x) => x.name === name)
                ? projects.find((x) => x.name === name).thumbnail
                : placeholderImage
            }
            alt={name}
          />
        </Thumbnail>
        <Content>
          <Title>
            <TextLink target={"_blank"} href={homepage || html_url}>
              <IconImage
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
        </Content>
      </StyledTile>
    </TileWrapper>
  );
};

export default Tile;
