import { createSlice } from "@reduxjs/toolkit";

const initialState = { msg: "", type: "" };

const Alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.msg = action.payload.msg;
      state.type = action.payload.type;
    },
    removeAlert: (state) => {
      state.msg = "";
      state.type = "";
    },
  },
});

export const { setAlert, removeAlert } = Alert.actions;
export default Alert.reducer;
