import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./saga";
import themeSlice from "./features/ThemeSwitch/themeSlice";
import reposSlice from "./features/Portfolio/reposSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repos: reposSlice,
    theme: themeSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
