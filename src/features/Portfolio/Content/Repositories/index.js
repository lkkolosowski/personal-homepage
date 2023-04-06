import Tile from "../../../../common/Tile";
import { TextLink } from "../../../../common/Link";
import { StyledRepositories, Description, List, Item } from "./styled";
import { capitalizeWords } from "./utils";

const Repositories = ({ repositories }) => {
  return (
    <StyledRepositories>
      {repositories.map(
        ({ id, name, description, homepage, html_url }) => (
          <Tile
            key={id}
            title={
              <TextLink target={"_blank"} href={homepage}>
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
