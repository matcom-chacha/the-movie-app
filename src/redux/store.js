import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./moviesSlice";
import movieDetailsReducer from "./movieDetailsSlice";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `movies`, handled by `moviesReducer`
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default store;
