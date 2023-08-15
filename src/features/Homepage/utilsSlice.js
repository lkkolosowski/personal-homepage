import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "../../common/ThemeSwitch/themeLocalStorage";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    isDarkTheme: getThemeFromLocalStorage(),
    toggleKey: 0,
    numberOfConfettiPieces: 0,
    formStatus: "unset",
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      state.toggleKey = state.toggleKey + 1;
    },
    setNumberOfConfettiPieces: (state, { payload: amount }) => {
      state.numberOfConfettiPieces = amount;
    },
    setFormStatus: (state, { payload: status }) => {
      state.formStatus = status;
    },
  },
});

export const { toggleTheme, setNumberOfConfettiPieces, setFormStatus } =
  utilsSlice.actions;

export const selectSliceState = (state) => state.utils;
export const selectIsDarkTheme = (state) => selectSliceState(state).isDarkTheme;
export const selectToggleKey = (state) => selectSliceState(state).toggleKey;
export const selectNumberOfConfettiPieces = (state) =>
  selectSliceState(state).numberOfConfettiPieces;
export const selectFormStatus = (state) => selectSliceState(state).formStatus;

export default utilsSlice.reducer;
