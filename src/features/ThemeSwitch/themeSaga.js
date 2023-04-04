import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export default function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
