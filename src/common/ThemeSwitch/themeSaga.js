import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectIsDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveThemeInLocalStorage, isDarkTheme);
}

export default function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
