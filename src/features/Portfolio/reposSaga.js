import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchReposStart,
  fetchReposSuccess,
  fetchReposFailure,
} from "./reposSlice";
import getRepos from "./getRepos";

function* fetchReposHandler() {
  try {
    yield delay(2000);
    const repos = yield call(getRepos);
    yield put(fetchReposSuccess(repos));
  } catch (error) {
    yield put(fetchReposFailure());
  }
}

export default function* reposSaga() {
  yield takeLatest(fetchReposStart.type, fetchReposHandler);
}
