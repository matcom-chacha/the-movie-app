import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../redux/moviesSlice";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { setCurrentPage } from "../redux/moviesSlice";
import { useMediaQuery } from "@mui/material";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: blueGrey[900],
    fontWeight: "bold",
    margin: "10px 0",
  },
});

const PopularMoviesList = () => {
  const currentPage = useSelector((state) => state.movies.currentPage);
  const popularMovies = useSelector((state) => state.movies.popular);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isMedium = useMediaQuery("(max-width: 960px)");
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <div>
      <Typography variant="h2" className={classes.header}>
        Most Popular Movies
      </Typography>

      <ImageList
        gap={16}
        cols={isMobile ? 2 : isMedium ? 3 : 4}
        sx={{
          margin: "0 auto",
          maxWidth: 1200,
          marginTop: isMobile ? "16px" : 0,
          marginBottom: isMobile ? "16px" : 0,
          marginLeft: isMedium || isMobile ? "16px" : "auto",
          marginRight: isMedium || isMobile ? "16px" : "auto",
        }}
      >
        {popularMovies.map((movie) => (
          <ImageListItem
            key={movie.id}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?w=248&fit=crop&auto=format`}
              srcSet={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={movie.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
            <ImageListItemBar
              title={movie.title}
              subtitle={movie.release_date}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${movie.title}`}
                  component={Link}
                  to={`/movies/${movie.id}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          count={500}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PopularMoviesList;
