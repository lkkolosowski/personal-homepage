import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./reposSlice";
import reposSaga from "./reposSaga";

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
