import Confettii from "../../common/Confetti";
import Container from "../../common/Container";
import ThemeSwitch from "../../common/ThemeSwitch";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Homepage = () => (
  <Container>
    <Confettii />
    <ThemeSwitch />
    <Hero />
    <Skills />
    <Portfolio />
    <Contact />
  </Container>
);

export default Homepage;
