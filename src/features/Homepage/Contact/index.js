import { paragraphs, links, goodbyePhrases } from "../nameplate";
import { TextLink } from "../../../common/Link";
import Socials from "./Socials";
import Subtitle from "../Subtitle";
import { usePhrases } from "../usePhrases";
import { Title, Paragraph, StyledContact } from "./styled";
import Form from "./Form";

const Contact = () => {
  const phrase = usePhrases(goodbyePhrases);
  return (
    <footer id="contact">
      <StyledContact>
        <aside>
          <Subtitle content={phrase} />
          <Title>
            <TextLink text href={`mailto:${links.email}`}>
              {links.email}
            </TextLink>
          </Title>
          <Paragraph>{paragraphs.footer}</Paragraph>
          <Socials />
        </aside>
        <Form />
      </StyledContact>
    </footer>
  );
};

export default Contact;
