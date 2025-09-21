// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

import githubReducer from "./slices/github";
import alertReducer from "./slices/alert";

const store = configureStore({
  reducer: {
    github: githubReducer, // add your reducers here
    alert: alertReducer,
  },
});

export default store;
