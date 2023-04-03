import { ButtonLink } from "../Link";
import { name, description, email } from "../../nameplate";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  Subtitle,
  HeaderParagraph,
  Icon,
} from "./styled";

const Header = () => (
  <StyledHeader>
    <ProfilePicture />
    <section>
      <Subtitle>Hello, my name is</Subtitle>
      <Title>{name}</Title>
      <HeaderParagraph>{description}</HeaderParagraph>
      <ButtonLink hero href={`mailto:${email}`}>
        <Icon />
        Contact me
      </ButtonLink>
    </section>
  </StyledHeader>
);

export default Header;
