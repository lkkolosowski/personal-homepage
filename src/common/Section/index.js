import { StyledSection, SectionBody, Title } from "./styled";

const Section = ({ title, body }) => (
  <StyledSection>
    <Title>{title}</Title>
    <SectionBody>{body}</SectionBody>
  </StyledSection>
);

export default Section;
