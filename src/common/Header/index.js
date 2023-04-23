import { StyledHeader, Subtitle, Title } from "./styled";

const Header = ({ icon, title, subtitle }) => (
  <StyledHeader>
    {icon}
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </StyledHeader>
);

export default Header;
