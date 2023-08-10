import { all } from "redux-saga/effects";
import utilsSaga from "./features/Homepage/utilsSaga";
import reposSaga from "./features/Homepage/Portfolio/reposSaga";

export default function* saga() {
  yield all([reposSaga(), utilsSaga()]);
}
