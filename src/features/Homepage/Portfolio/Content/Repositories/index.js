import { useRef } from "react";
import Tile from "./Tile";
import { StyledRepositories } from "./styled";
import { transformedRepositories } from "./utils";
import { motion } from "framer-motion";
import { useOnLoadImages } from "./useOnLoadImages";
import Loader from "../Loader";

const Repositories = ({ repositories }) => {
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  return (
    <>
      {!imagesLoaded && <Loader />}
      <StyledRepositories ref={wrapperRef} hidden={!imagesLoaded}>
        {transformedRepositories(repositories).map(
          ({ id, name, description, homepage, html_url }, i) => (
            <motion.div
              key={id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                duration: 0.9,
                bounce: 0.45,
                delay: i * 0.15,
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
            </motion.div>
          )
        )}
      </StyledRepositories>
    </>
  );
};

export default Repositories;
