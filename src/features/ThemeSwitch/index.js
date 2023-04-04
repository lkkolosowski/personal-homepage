import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "./themeSlice";

const ThemeSwitch = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Dark mode {theme === "light" ? "off" : "on"}
      </button>
    </div>
  );
};

export default ThemeSwitch;
