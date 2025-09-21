// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

import githubReducer from "./modules/Github";
import alertReducer from "./modules/Alert";

const store = configureStore({
  reducer: {
    github: githubReducer, // add your reducers here
    alert: alertReducer,
  },
});

export default store;
