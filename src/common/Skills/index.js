import { StyledSection, Title, Eclipse, Item, List } from "./styled";

export const Skills = ({ title, skills }) => (
  <StyledSection>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Eclipse />
          {skill}
        </Item>
      ))}
    </List>
  </StyledSection>
);
