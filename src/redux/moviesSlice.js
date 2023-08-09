import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMD_API_KEY;

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async (page, { getState }) => {
    const pages = getState().movies.pages;
    if (pages[page]) {
      return pages[page];
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: { popular: [], pages: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add fetched movies to the array
        state.popular = action.payload;
        // Store the fetched page as action.meta.arg resturns the number
        state.pages[action.meta.arg] = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
