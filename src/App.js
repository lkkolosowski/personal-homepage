import Container from "./common/Container";
import Hero from "./features/Hero";
import { skills, goals } from "./nameplate";
import Skillset from "./features/Skillset";
import Portfolio from "./features/Portfolio";
import Contact from "./features/Contact";

function App() {
  return (
    <Container>
      <Hero />
      <Skillset
        title={<>My skillset includes&nbsp;🛠️</>}
        skills={skills}
      />
      <Skillset
        title={<>What I want to learn next&nbsp;🚀</>}
        skills={goals}
      />
      <Portfolio />
      <Contact />
    </Container>
  );
}

export default App;
