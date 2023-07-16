import { socials } from "./socials";
import { StyledSocials, IconLink } from "./styled";
import { motion } from "framer-motion";

const Socials = () => (
  <StyledSocials>
    {socials.map(({ name, url, Icon, iconBackground }, i) => (
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 0.9,
          bounce: 0.45,
          delay: i * 0.23333333,
        }}
      >
        <IconLink
          key={name}
          href={url}
          title={name}
          target="_blank"
          rel="noreferrer"
        >
          <Icon iconBackground={iconBackground} />
        </IconLink>
      </motion.div>
    ))}
  </StyledSocials>
);

export default Socials;
