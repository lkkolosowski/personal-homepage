import { Icon, StyledHeader, Subtitle, Title } from "./styled";

const Header = ({ icon, title, subtitle }) => (
  <StyledHeader>
    {icon && <Icon>{icon}</Icon>}
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </StyledHeader>
);

export default Header;
