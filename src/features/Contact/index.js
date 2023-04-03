import { description, email, github, linkedin } from "../../nameplate";
import {TextLink} from "../../common/Link";
import { ReactComponent as GithubIcon } from "../../icons/github2.svg";
import { ReactComponent as LinkedinIcon } from "../../icons/linkedin.svg";
import {
  Title,
  Subtitle,
  Paragraph,
  Socials,
  IconLink,
} from "./styled";

const Contact = () => (
  <section>
    <Subtitle>Let’s talk!</Subtitle>
    <Title>
      <TextLink href={`mailto:${email}`}>{email}</TextLink>
    </Title>
    <Paragraph>{description}</Paragraph>
    <Socials>
      <IconLink target="_blank" href={github}>
        <GithubIcon />
      </IconLink>
      <IconLink target="_blank" href={linkedin}>
        <LinkedinIcon />
      </IconLink>
    </Socials>
  </section>
);

export default Contact;
