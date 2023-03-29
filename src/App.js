import Container from "./common/Container";
import Hero from "./common/Hero";
import { skills, nextSkills } from "./common/Skills/skillsData";
import { Skills } from "./common/Skills";

function App() {
  return (
    <Container>
      <Hero />
      <Skills title="My skillset includes 🛠️" skills={skills} />
      <Skills title="What I want to learn next 🚀" skills={nextSkills} />
    </Container>
  );
}

export default App;
