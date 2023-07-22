import { useRef } from "react";
import Tile from "./Tile";
import { Repository, StyledRepositories } from "./styled";
import { motion } from "framer-motion";
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
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                  height: "100%",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  height: "100%",
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
              </motion.div>
            </Repository>
          )
        )}
      </StyledRepositories>
    </>
  );
};

export default Repositories;
