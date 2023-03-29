import Container from "./common/Container";
import Hero from "./common/Hero";
import { skills } from "./common/Skills/skillsData";
import { Skills } from "./common/Skills";

function App() {
  return (
    <Container>
      <Hero />
      <Skills title="My skillset includes" skills={skills} />
    </Container>
  );
}

export default App;
