import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./saga";
import themeSlice from "./common/ThemeSwitch/themeSlice";
import reposSlice from "./features/Homepage/Portfolio/reposSlice";

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
