import { ButtonLink, TextLink } from "../../../common/Link";
import { name, paragraphs, links, welcomePhrases, nick } from "../nameplate";
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
            <Quotation>{paragraphs.quotation}</Quotation>
          </HeaderParagraph>
          <HeaderParagraph>
            {paragraphs.header}{" "}
            <TextLink
              soft
              href={links.linkedin}
              target="_blank"
              rel="no-referrer"
            >
              @{nick}
            </TextLink>
          </HeaderParagraph>
        </Heading>
        <ButtonLink wide hero title={links.email} href="#contact">
          <MessageIcon />
          Hire me
        </ButtonLink>
      </section>
    </StyledHeader>
  );
};

export default Hero;
