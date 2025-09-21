import { createSlice } from "@reduxjs/toolkit";
import {
  removeAlertReducer,
  setAlertReducer,
} from "../reducers/alert.reducer.js";
const initialState = { msg: "", type: "" };

const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: setAlertReducer,
    removeAlert: removeAlertReducer,
  },
});

export const { setAlert, removeAlert } = alert.actions;
export default alert.reducer;
