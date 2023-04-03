import {
  StyledSection,
  Title,
  SectionBody,
  Eclipse,
  Item,
  List,
} from "./styled";

const Skills = ({ title, skills }) => (
  <StyledSection>
    <Title>{title}</Title>
    <SectionBody>
      <List>
        {skills.map((skill) => (
          <Item key={skill}>
            <Eclipse />
            {skill}
          </Item>
        ))}
      </List>
    </SectionBody>
  </StyledSection>
);

export default Skills;
