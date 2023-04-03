import { StyledButton } from "./styled";

const Button = ({ children, hero }) => (
  <StyledButton hero={hero}>{children}</StyledButton>
);

export default Button;
