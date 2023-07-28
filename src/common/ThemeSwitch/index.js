import { useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice";
import {
  StyledThemeSwitch,
  ThemeSwitchWrapper,
  Positioned,
  Text,
  Wrapper,
  Switcher,
  Icon,
} from "./styled";

const ThemeSwitch = () => {
  const dispatch = useDispatch();

  return (
    <Positioned>
      <Text overlayed>Dark mode on</Text>
      <Wrapper>
        <Text>Dark mode off</Text>
        <StyledThemeSwitch aria-label="switch theme" onClick={() => dispatch(toggleTheme())}>
          <ThemeSwitchWrapper>
            <Switcher>
              <Icon />
            </Switcher>
          </ThemeSwitchWrapper>
        </StyledThemeSwitch>
      </Wrapper>
    </Positioned>
  );
};

export default ThemeSwitch;
