import Skillset from "./Skillset";
import { skills } from "./skillsData";
// import { goals } from "./skillsData";
import { Icon } from "./styled";

const Skills = () => (
  <>
    <Skillset
      icon={<Icon>🛠️</Icon>}
      title={"Skills"}
      subtitle={"My skillset includes"}
      skills={skills}
    />
    {/* <Skillset
      icon={<Icon>🚀</Icon>}
      title={"Future"}
      subtitle={"What I want to learn next"}
      skills={goals}
    /> */}
  </>
);

export default Skills;
