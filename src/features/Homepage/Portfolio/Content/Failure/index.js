import { ButtonLink } from "../../../../../common/Link";
import { links } from "../../../nameplate";
import { Wrapper, Title, Paragraph, Icon } from "./styled";

const Failure = () => (
  <Wrapper>
    <Icon />
    <Title>Ooops! Something went wrong...</Title>
    <Paragraph>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Paragraph>
    <ButtonLink target="_blank" href={links.github} rel="noreferrer">
      Go to Github
    </ButtonLink>
  </Wrapper>
);

export default Failure;
