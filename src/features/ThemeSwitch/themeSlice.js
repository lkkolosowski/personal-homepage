import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getThemeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkThemeState = (state) => state.theme;
export const selectIsDarkTheme = (state) =>
  selectIsDarkThemeState(state).isDarkTheme;

export default themeSlice.reducer;
