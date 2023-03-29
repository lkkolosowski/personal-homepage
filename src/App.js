import Container from "./common/Container";
import Hero from "./common/Hero";
import Section from "./common/Section";
import { Skills } from "./common/Skills";

function App() {
  return (
    <Container>
      <Hero />
      <Section title="My skillset includes" body={<Skills />} />
    </Container>
  );
}

export default App;
