import { all } from "redux-saga/effects";
import reposSaga from "./features/Portfolio/Repositories/reposSaga";

export default function* saga() {
  yield all([reposSaga()]);
}
