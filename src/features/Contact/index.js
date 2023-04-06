import { information, email } from "../../nameplate";
import { TextLink } from "../../common/Link";
import Socials from "./Socials";
import { Title, Subtitle, Paragraph } from "./styled";

const Contact = () => (
  <footer>
    <Subtitle>Let's talk!</Subtitle>
    <Title>
      <TextLink text href={`mailto:${email}`}>
        {email}
      </TextLink>
    </Title>
    <Paragraph>{information}</Paragraph>
    <Socials></Socials>
  </footer>
);

export default Contact;
