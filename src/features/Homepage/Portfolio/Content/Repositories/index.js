import { useRef } from "react";
import Tile from "./Tile";
import { Repository, StyledRepositories } from "./styled";
import { useOnLoadImages } from "./useOnLoadImages";
import Loader from "../Loader";
import { transformedRepositories } from "./utils";

const Repositories = ({ repositories }) => {
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  return (
    <>
      {imagesLoaded === false && <Loader />}
      <StyledRepositories ref={wrapperRef} hidden={imagesLoaded === false}>
        {transformedRepositories(repositories).map(
          ({ id, name, description, homepage, html_url }, i) => (
            <Repository key={id}>
              <Tile
                tileIndex={i}
                name={name}
                description={description}
                homepage={homepage}
                html_url={html_url}
              />
            </Repository>
          )
        )}
      </StyledRepositories>
    </>
  );
};

export default Repositories;
