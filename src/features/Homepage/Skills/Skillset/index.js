import Header from "../../../../common/Header";
import Section from "../../../../common/Section";
import Skill from "./Skill";
import { Break, Skills } from "./styled";

const Skillset = ({ title, icon, subtitle, skills }) => {

  return (
    <Section>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <Skills>
        {skills
          .map(({ name, Icon, color, level, description }, i) => (
            <Skill
              skillIndex={i}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(0, 3)}
        <Break />
        {skills
          .map(({ name, Icon, color, level, description }, i) => (
            <Skill
              skillIndex={i}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(3, 7)}
        <Break />
        {skills
          .map(({ name, Icon, color, level, description }, i) => (
            <Skill
              skillIndex={i}
              name={name}
              Icon={Icon}
              color={color}
              level={level}
              description={description}
            />
          ))
          .slice(7)}
      </Skills>
    </Section>
  );
};

export default Skillset;
