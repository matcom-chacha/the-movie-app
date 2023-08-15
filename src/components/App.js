import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import PopularMoviesList from "./PopularMoviesList";
import MovieDetails from "./MovieDetails";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router basename="/">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<PopularMoviesList />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
