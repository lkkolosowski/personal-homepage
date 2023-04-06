import { information, email, github, linkedin } from "../../nameplate";
import { TextLink } from "../../common/Link";
import { ReactComponent as GithubIcon } from "../../icons/github2.svg";
import { ReactComponent as LinkedinIcon } from "../../icons/linkedin.svg";
import { Title, Subtitle, Paragraph, Socials, IconLink } from "./styled";

const Contact = () => (
  <footer>
    <Subtitle>Let's talk!</Subtitle>
    <Title>
      <TextLink text href={`mailto:${email}`}>{email}</TextLink>
    </Title>
    <Paragraph>{information}</Paragraph>
    <Socials>
      <IconLink target="_blank" href={github}>
        <GithubIcon />
      </IconLink>
      <IconLink target="_blank" href={linkedin}>
        <LinkedinIcon />
      </IconLink>
    </Socials>
  </footer>
);

export default Contact;
