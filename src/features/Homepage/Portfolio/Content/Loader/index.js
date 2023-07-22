import { motion } from "framer-motion";
import { Wrapper, Paragraph, StyledLoader } from "./styled";

const Loader = () => {
  return (
    <Wrapper>
      <Paragraph>Please wait, projects are being loaded...</Paragraph>
      <motion.div
        initial={{
          opacity: 0,
          width: "100%",
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <StyledLoader />
      </motion.div>
    </Wrapper>
  );
};

export default Loader;
