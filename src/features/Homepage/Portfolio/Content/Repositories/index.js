import Tile from "./Tile";

import { StyledRepositories } from "./styled";

const Repositories = ({ repositories }) => {
  return (
    <StyledRepositories>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile
          key={id}
          name={name}
          description={description}
          homepage={homepage}
          html_url={html_url}
        />
      ))}
    </StyledRepositories>
  );
};

export default Repositories;
