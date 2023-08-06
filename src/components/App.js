import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import PopularMoviesList from "./PopularMoviesList";

const App = () => {
  return (
    <Provider store={store}>
      <PopularMoviesList />
    </Provider>
  );
};

export default App;
