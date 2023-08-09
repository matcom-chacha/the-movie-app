import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `movies`, handled by `moviesReducer`
    movies: moviesReducer,
  },
});

export default store;
