import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMD_API_KEY;

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: { details: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the details object with the fetched details
        state.details[action.meta.arg] = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
