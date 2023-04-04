import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    status: "initial",
    repos: [],
    error: null,
  },
  reducers: {
    fetchReposStart: (state) => {
      state.status = "loading";
    },
    fetchReposSuccess: (state, action) => {
      state.status = "success";
      state.repos = action.payload;
      state.error = null;
    },
    fetchReposFailure: (state, action) => {
      state.status = "error";
      state.repos = [];
      state.error = action.payload;
    },
  },
});

export const { fetchReposStart, fetchReposSuccess, fetchReposFailure } =
  reposSlice.actions;

const selectReposState = (state) => state.repos;

export const selectRepos = (state) => selectReposState(state).repos;
export const selectReposStatus = (state) => selectReposState(state).status;

export default reposSlice.reducer;
