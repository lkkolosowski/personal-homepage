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
      <Text overlay>Dark mode on</Text>
      <Wrapper>
        <Text>Dark mode off</Text>
        <StyledThemeSwitch onClick={() => dispatch(toggleTheme())}>
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
