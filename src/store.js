import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./saga";
import utilsSlice from "./features/Homepage/utilsSlice";
import reposSlice from "./features/Homepage/Portfolio/reposSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repos: reposSlice,
    utils: utilsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
