import { useRef } from "react";
import { useOnLoadImages } from "./useOnLoadImages";
import Repository from "./Repository";
import { InlineLoader, Paragraph, StyledRepositories, Wrapper } from "./styled";
import { transformedRepositories } from "./utils";
import { motion } from "framer-motion";

const Repositories = ({ projects, repositories }) => {
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
    <Wrapper>
      {!imagesLoaded && (
        <>
          <Paragraph
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            Please wait, projects are being loaded…
            <InlineLoader />
          </Paragraph>
        </>
      )}
      <StyledRepositories
        as={imagesLoaded ? motion.div : "div"}
        variants={container}
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
        }}
        ref={wrapperRef}
        hidden={!imagesLoaded}
      >
        {transformedRepositories(repositories).map(
          ({ name, description, homepage, html_url }) => (
            <Repository
              projects={projects}
              key={name}
              name={name}
              description={description}
              homepage={homepage}
              html_url={html_url}
            />
          )
        )}
      </StyledRepositories>
    </Wrapper>
  );
};
export default Repositories;
