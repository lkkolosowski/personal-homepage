import Skillset from "./Skillset";
import { skills } from "./skills";

const Skills = () => (
  <Skillset
    icon="🚀"
    title="Skills"
    subtitle="My skillset includes"
    skills={skills}
  />
);

export default Skills;
