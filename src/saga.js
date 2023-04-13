import { all } from "redux-saga/effects";
import themeSaga from "./common/ThemeSwitch/themeSaga";
import reposSaga from "./features/Portfolio/reposSaga";

export default function* saga() {
  yield all([reposSaga(), themeSaga()]);
}
