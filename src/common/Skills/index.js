import { skills } from "./skillsData";
import { Eclipse, Item, List } from "./styled";

export const Skills = () => (
  <List>
    {skills.map((skill) => (
      <Item key={skill}>
        <Eclipse />
        {skill}
      </Item>
    ))}
  </List>
);
