import { useRef } from "react";
import Tile from "./Tile";
import { Repository, StyledRepositories } from "./styled";
import { motion } from "framer-motion";
import { useOnLoadImages } from "./useOnLoadImages";
import Loader from "../Loader";

const Repositories = ({ repositories }) => {
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  const MotionRepository = motion(Repository);

  return (
    <>
      {!imagesLoaded && <Loader />}
      <StyledRepositories ref={wrapperRef} hidden={!imagesLoaded}>
        {repositories.map(
          ({ id, name, description, homepage, html_url }, i) => (
            <MotionRepository
              key={id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.9,
                bounce: 0.45,
                delay: i * 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <Tile
                name={name}
                description={description}
                homepage={homepage}
                html_url={html_url}
              />
            </MotionRepository>
          )
        )}
      </StyledRepositories>
    </>
  );
};

export default Repositories;
