import Container from "./common/Container";
import Header from "./common/Header";
import { skills, nextSkills } from "./common/Skills/skillsData";
import { Skills } from "./common/Skills";

function App() {
  return (
    <Container>
      <Header />
      <Skills title={<>My skillset includes&nbsp;🛠️</>} skills={skills} />
      <Skills
        title={<>What I want to learn next&nbsp;🚀</>}
        skills={nextSkills}
      />
    </Container>
  );
}

export default App;
