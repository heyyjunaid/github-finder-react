import { createSlice } from "@reduxjs/toolkit";
import {
  setLoadingReducer,
  setSearchTextReducer,
  setUserDataReducer,
  setUserRepoDataReducer,
  setUsersReducer,
} from "../reducers/github.reducer";

const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  searchText: "",
};

const github = createSlice({
  name: "github",
  initialState,
  reducers: {
    setSearchText: setSearchTextReducer,
    setUsers: setUsersReducer,
    setLoading: setLoadingReducer,
    setUserData: setUserDataReducer,
    setUserRepoData: setUserRepoDataReducer,
  },
});

export const {
  setUserData,
  setLoading,
  setUsers,
  setSearchText,
  setUserRepoData,
} = github.actions;
export default github.reducer;
