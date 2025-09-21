export const setAlertReducer = (state, action) => {
  state.msg = action.payload.msg;
  state.type = action.payload.type;
};

export const removeAlertReducer = (state) => {
  state.msg = "";
  state.type = "";
};
