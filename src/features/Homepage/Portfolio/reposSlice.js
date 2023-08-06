import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    status: "initial",
    repos: [],
  },
  reducers: {
    fetchReposStart: () => ({
      status: "loading",
      repos: null,
    }),
    fetchReposSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repos: repositories,
    }),
    fetchReposFailure: () => ({
      status: "error",
      repos: null,
    }),
  },
});

export const { fetchReposStart, fetchReposSuccess, fetchReposFailure } =
  reposSlice.actions;

const selectReposState = (state) => state.repos;

export const selectRepos = (state) => selectReposState(state).repos;
export const selectReposStatus = (state) => selectReposState(state).status;

export default reposSlice.reducer;
