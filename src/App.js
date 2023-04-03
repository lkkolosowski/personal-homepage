import Container from "./common/Container";
import Header from "./common/Header";
import { skills, goals } from "./nameplate";
import Skillset from "./common/Skillset";
import Portfolio from "./common/Portfolio";
import Contact from "./common/Contact";

function App() {
  return (
    <Container>
      <Header />
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
