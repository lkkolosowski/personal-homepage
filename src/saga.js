import { all } from "redux-saga/effects";
import themeSaga from "./features/ThemeSwitch/themeSaga";
import reposSaga from "./features/Portfolio/reposSaga";

export default function* saga() {
  yield all([reposSaga(), themeSaga()]);
}
