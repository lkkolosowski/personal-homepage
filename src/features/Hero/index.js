import { ButtonLink } from "../../common/Link";
import { name, description, email, welcomePhrases } from "../../nameplate";
import Subtitle from "../Subtitle";
import { usePhrases } from "../usePhrases";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  HeaderParagraph,
  Icon,
} from "./styled";

const Hero = () => {
  const phrase = usePhrases(welcomePhrases);

  return (
    <StyledHeader>
      <ProfilePicture />
      <section>
        <Subtitle content={phrase} />
        <Title>{name}</Title>
        <HeaderParagraph>{description}</HeaderParagraph>
        <ButtonLink title={email} href={`mailto:${email}`}>
          <Icon />
          Hire me
        </ButtonLink>
      </section>
    </StyledHeader>
  );
};

export default Hero;
