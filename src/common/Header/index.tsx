import { Icon, StyledHeader, Subtitle, Title } from "./styled";

interface Props {
  icon: any;
  title: string;
  subtitle: string;
}

const Header = ({ icon, title, subtitle }: Props) => (
  <StyledHeader>
    {icon && <Icon>{icon}</Icon>}
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </StyledHeader>
);

export default Header;
