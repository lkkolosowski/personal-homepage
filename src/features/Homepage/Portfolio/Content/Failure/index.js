import { ButtonLink } from "../../../../../common/Link";
import { links } from "../../../nameplate";
import { motion } from "framer-motion";
import { Wrapper, Title, Paragraph, Icon } from "./styled";

const Failure = () => (
  <Wrapper
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75 }}
  >
    <Icon />
    <Title>Ooops! Something went wrong...</Title>
    <Paragraph>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Paragraph>
    <ButtonLink target="_blank" href={links.github} rel="noreferrer">
      Go to Github
    </ButtonLink>
  </Wrapper>
);

export default Failure;
