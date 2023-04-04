import Container from "./common/Container";
import Hero from "./features/Hero";
import { skills, goals } from "./nameplate";
import Skillset from "./features/Skillset";
import Portfolio from "./features/Portfolio";
import Contact from "./features/Contact";
import ThemeSwitch from "./features/ThemeSwitch";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { selectTheme } from "./features/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Container>
        <ThemeSwitch />
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
    </ThemeProvider>
  );
}

export default App;
