import Container from "../../common/Container";
import ThemeSwitch from "../../common/ThemeSwitch";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skillset from "./Skillset";
import { skills, goals, skillsTitle, goalsTitle } from "./nameplate";

const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <Hero />
    <Skillset title={skillsTitle} skills={skills} />
    <Skillset title={goalsTitle} skills={goals} />
    <Portfolio />
    <Contact />
  </Container>
);

export default Homepage;
