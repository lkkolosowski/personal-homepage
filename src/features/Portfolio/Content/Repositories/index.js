import Tile from "../../../../common/Tile";
import { TextLink } from "../../../../common/Link";
import { StyledRepositories, Description, List, Item } from "./styled";

const Repositories = ({ repositories }) => {
  function capitalizeWords(string) {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <StyledRepositories>
      {repositories.map(
        ({ id, name, description, homepage, html_url }) => (
          <Tile
            key={id}
            title={
              <TextLink target={"_blank"} href={html_url}>
                {capitalizeWords(name)}
              </TextLink>
            }
            content={
              <>
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
              </>
            }
          />
        )
      )}
    </StyledRepositories>
  );
};

export default Repositories;
