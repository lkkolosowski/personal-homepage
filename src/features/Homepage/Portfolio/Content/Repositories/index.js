import { useRef } from "react";
import Repository from "./Repository";
import { StyledRepositories } from "./styled";
import { useOnLoadImages } from "./useOnLoadImages";
import Loader from "../Loader";
import { transformedRepositories } from "./utils";
import { motion } from "framer-motion";

const Repositories = ({ repositories }) => {
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      {!imagesLoaded && <Loader />}
      <StyledRepositories
        as={imagesLoaded ? motion.div : "div"}
        variants={container}
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
        }}
        ref={wrapperRef}
        hidden={imagesLoaded === false}
      >
        {transformedRepositories(repositories).map(
          ({ name, description, homepage, html_url }) => (
            <Repository
              key={name}
              name={name}
              description={description}
              homepage={homepage}
              html_url={html_url}
            />
          )
        )}
      </StyledRepositories>
    </>
  );
};

export default Repositories;
