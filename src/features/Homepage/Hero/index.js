import { ButtonLink, TextLink } from "../../../common/Link";
import { name, about, email, welcomePhrases, linkedin, nick } from "../nameplate";
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
          <HeaderParagraph>
            {about.description} <TextLink soft href={linkedin} target="_blank" rel="no-referrer">@{nick}</TextLink>
          </HeaderParagraph>
        </Heading>
        <ButtonLink wide hero title={email} href="#contact">
          <MessageIcon />
          Hire me
        </ButtonLink>
      </section>
    </StyledHeader>
  );
};

export default Hero;
