import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "../../common/ThemeSwitch/themeLocalStorage";
import { selectIsDarkTheme } from "./utilsSlice";

function* saveThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveThemeInLocalStorage, isDarkTheme);
}

export default function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
