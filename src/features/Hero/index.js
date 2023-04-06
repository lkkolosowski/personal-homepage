import { ButtonLink } from "../../common/Link";
import { name, description, email } from "../../nameplate";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  Subtitle,
  HeaderParagraph,
  Icon,
} from "./styled";

const Hero = () => (
  <StyledHeader>
    <ProfilePicture />
    <section>
      <Subtitle>Hello, my name is</Subtitle>
      <Title>{name}</Title>
      <HeaderParagraph>{description}</HeaderParagraph>
      <ButtonLink hero title={email} href={`mailto:${email}`}>
        <Icon />
        Hire me
      </ButtonLink>
    </section>
  </StyledHeader>
);

export default Hero;