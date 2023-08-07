import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import PopularMoviesList from "./PopularMoviesList";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<PopularMoviesList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
