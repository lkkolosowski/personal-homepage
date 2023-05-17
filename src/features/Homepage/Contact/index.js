import { information, email, goodbyePhrases } from "../nameplate";
import { TextLink } from "../../../common/Link";
import Socials from "./Socials";
import Subtitle from "../Subtitle";
import { usePhrases } from "../usePhrases";
import { Title, Paragraph } from "./styled";

const Contact = () => {
  const phrase = usePhrases(goodbyePhrases);
  return (
    <footer id="contact">
      <Subtitle content={phrase} />
      <Title>
        <TextLink text href={`mailto:${email}`}>
          {email}
        </TextLink>
      </Title>
      <Paragraph>{information}</Paragraph>
      <Socials></Socials>
    </footer>
  );
};

export default Contact;
