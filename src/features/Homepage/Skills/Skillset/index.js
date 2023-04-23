import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import { SectionBody, Eclipse, Item, List } from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => (
  <Section>
    <Header icon={icon} title={title} subtitle={subtitle} />
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
  </Section>
);

export default Skillset;
