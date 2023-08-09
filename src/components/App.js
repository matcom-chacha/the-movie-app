import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import PopularMoviesList from "./PopularMoviesList";
import MovieDetails from "./MovieDetails";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<PopularMoviesList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
