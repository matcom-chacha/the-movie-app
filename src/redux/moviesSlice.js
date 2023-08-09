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

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (movieId, { getState }) => {
    const moviesDetails = getState().movies.moviesDetails;
    if (moviesDetails[movieId]) {
      return moviesDetails[movieId];
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    pages: {},
    details: [],
    moviesDetails: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popular = action.payload;
        state.pages[action.meta.arg] = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload;
        state.moviesDetails[action.meta.arg] = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
