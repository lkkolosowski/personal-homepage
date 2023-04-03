import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./features/Portfolio/Repositories/reposSlice";
import reposSaga from "./features/Portfolio/Repositories/reposSaga";

const rootReducer = combineReducers({
  repos: reposReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(reposSaga);

export default store;
