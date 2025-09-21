import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  searchText: "",
};

const Github = createSlice({
  name: "github",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      console.log("@@@@@", action.payload);
      state.searchText = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setUserRepoData: (state, action) => {
      console.log("######", action.payload);
      state.repos = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setUserData,
  setLoading,
  setUsers,
  setSearchText,
  setUserRepoData,
} = Github.actions;
export default Github.reducer;
