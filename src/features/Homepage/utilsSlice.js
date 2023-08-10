import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "../../common/ThemeSwitch/themeLocalStorage";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    isDarkTheme: getThemeFromLocalStorage(),
    numberOfConfettiPieces: 0,
    formStatus: "unset",
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
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
export const selectNumberOfConfettiPieces = (state) =>
  selectSliceState(state).numberOfConfettiPieces;
export const selectFormStatus = (state) => selectSliceState(state).formStatus;

export default utilsSlice.reducer;
