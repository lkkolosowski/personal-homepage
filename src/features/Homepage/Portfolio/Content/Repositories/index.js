import Tile from "./Tile";
import { StyledRepositories } from "./styled";
import { transformedRepositories } from "./utils";

const Repositories = ({ repositories }) => {

  return (
    <StyledRepositories>
      {transformedRepositories(repositories).map(
        ({ id, name, description, homepage, html_url }) => (
          <Tile
            key={id}
            name={name}
            description={description}
            homepage={homepage}
            html_url={html_url}
          />
        )
      )}
    </StyledRepositories>
  );
};

export default Repositories;
