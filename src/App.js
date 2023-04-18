import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { selectIsDarkTheme } from "./common/ThemeSwitch/themeSlice";
import { Normalize } from "styled-normalize";
import Homepage from "./features/Homepage";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
