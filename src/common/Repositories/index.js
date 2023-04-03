import { Tile } from "../Tile";
import {
  StyledRepositories,
  Description,
  List,
  Item,
  Link,
} from "./styled";

export const Repositories = ({ repositories }) => {
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
            title={<Link href={"test"}>{capitalizeWords(name)}</Link>}
            content={
              <>
                <Description>{description}</Description>
                <List>
                  <Item>
                    <span>Demo:</span>
                    <span>
                      <Link target={"_blank"} href={homepage}>https://{name}.demo</Link>
                    </span>
                  </Item>
                  <Item>
                    <span>Code:</span>
                    <span>
                      <Link target={"_blank"} href={html_url}>https://{name}.code</Link>
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
