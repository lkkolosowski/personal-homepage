import getRepos from "./getRepos";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchReposStart,
  fetchReposSuccess,
  fetchReposFailure,
} from "./reposSlice";

function* fetchReposHandler(action) {
  try {
    yield delay(1900);
    const repos = yield call(getRepos, action.token);
    yield put(fetchReposSuccess(repos));
  } catch (error) {
    yield put(fetchReposFailure(error));
  }
}

export default function* reposSaga() {
  yield takeLatest(fetchReposStart.type, fetchReposHandler);
}
