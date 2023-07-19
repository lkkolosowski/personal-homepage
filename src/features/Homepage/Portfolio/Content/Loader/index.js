import { motion } from "framer-motion";
import { Wrapper, Paragraph, StyledLoader } from "./styled";

const Loader = () => {
  const MotionLoader = motion(StyledLoader);
  return (
    <Wrapper>
      <Paragraph>Please wait, projects are being loaded...</Paragraph>
      <MotionLoader
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      />
    </Wrapper>
  );
};

export default Loader;
