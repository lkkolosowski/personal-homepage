import { socials } from "./socials";
import { StyledSocials, IconLink } from "./styled";

const Socials = () => (
  <StyledSocials>
    {socials.map(({ name, url, Icon }) => (
      <IconLink
        key={name}
        href={url}
        title={name}
        target="_blank"
        rel="noreferrer"
      >
        <Icon />
      </IconLink>
    ))}
  </StyledSocials>
);

export default Socials;
