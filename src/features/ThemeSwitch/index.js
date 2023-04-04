import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSlice";
import { StyledThemeSwitch, Wrapper } from "./styled";

const ThemeSwitch = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <StyledThemeSwitch onClick={() => dispatch(toggleTheme())}>
        Dark mode {theme === "light" ? "off" : "on"}
      </StyledThemeSwitch>
    </Wrapper>
  );
};

export default ThemeSwitch;
