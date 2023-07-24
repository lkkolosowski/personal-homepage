import Skillset from "./Skillset";
import { skills } from "./skills";
import { Icon } from "./styled";

const Skills = () => (
  <Skillset
    icon={<Icon>🚀</Icon>}
    title={"Skills"}
    subtitle={"My skillset includes"}
    skills={skills}
  />
);

export default Skills;
