// github.reducers.js

export const setSearchTextReducer = (state, action) => {
  state.searchText = action.payload;
};

export const setUsersReducer = (state, action) => {
  state.users = action.payload;
  state.loading = false;
};

export const setLoadingReducer = (state, action) => {
  state.loading = action.payload;
};

export const setUserDataReducer = (state, action) => {
  state.user = action.payload;
  state.loading = false;
};

export const setUserRepoDataReducer = (state, action) => {
  state.repos = action.payload;
  state.loading = false;
};
