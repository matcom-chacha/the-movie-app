import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../redux/moviesSlice";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const PopularMoviesList = () => {
  const popularMovies = useSelector((state) => state.movies.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Popular Movies</ListSubheader>
      </ImageListItem>
      {popularMovies.map((movie) => (
        <ImageListItem key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?w=248&fit=crop&auto=format`}
            srcSet={`https://image.tmdb.org/t/p/w500/${movie.poster_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
            subtitle={movie.title}
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
  );
};

export default PopularMoviesList;
