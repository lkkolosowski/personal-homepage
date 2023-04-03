import { StyledButtonLink } from "./styled";

const ButtonLink = ({ children, hero }) => (
  <StyledButtonLink hero={hero}>{children}</StyledButtonLink>
);

export default ButtonLink;
