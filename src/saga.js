import { all } from "redux-saga/effects";
import reposSaga from "./features/Portfolio/Repositories/reposSaga";
import themeSaga from "./features/ThemeSwitch/themeSaga";

export default function* saga() {
  yield all([reposSaga(), themeSaga()]);
}
