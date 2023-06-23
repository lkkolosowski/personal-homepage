import { ButtonLink } from "../../../common/Link";
import { name, about, email, welcomePhrases } from "../nameplate";
import Subtitle from "../Subtitle";
import { usePhrases } from "../usePhrases";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  HeaderParagraph,
  Icon,
  LineBreak,
} from "./styled";

const Hero = () => {
  const phrase = usePhrases(welcomePhrases);

  return (
    <StyledHeader>
      <ProfilePicture />
      <section>
        <Subtitle content={phrase} />
        <Title>{name}</Title>
        <HeaderParagraph>{about.heading}<LineBreak />{about.description}</HeaderParagraph>
        <ButtonLink wide title={email} href="#contact">
          <Icon />
          Hire me
        </ButtonLink>
      </section>
    </StyledHeader>
  );
};

export default Hero;
