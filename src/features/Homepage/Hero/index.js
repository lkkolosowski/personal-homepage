import { ButtonLink } from "../../../common/Link";
import { name, about, email, welcomePhrases } from "../nameplate";
import Subtitle from "../Subtitle";
import { usePhrases } from "../usePhrases";
import {
  StyledHeader,
  ProfilePicture,
  Title,
  HeaderParagraph,
  Quotation,
  Heading,
  MessageIcon,
} from "./styled";

const Hero = () => {
  const phrase = usePhrases(welcomePhrases);

  return (
    <StyledHeader>
      <ProfilePicture />
      <section>
        <Subtitle content={phrase} />
        <Title>{name}</Title>
        <Heading>
          <HeaderParagraph>
            <Quotation>{about.heading}</Quotation>
          </HeaderParagraph>
          <HeaderParagraph>{about.description}</HeaderParagraph>
        </Heading>
        <ButtonLink wide title={email} href="#contact">
          <MessageIcon />
          Hire me
        </ButtonLink>
      </section>
    </StyledHeader>
  );
};

export default Hero;
