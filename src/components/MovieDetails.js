import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../redux/movieDetailsSlice";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useSelector((state) => state.movieDetails.details[movieId]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(movie);
    // Fetch only run if we don't have the details yet.
    if (!movie) {
      dispatch(fetchMovieDetails(movieId));
    }
  }, [dispatch, movieId, movie]);

  if (!movie) return <Typography variant="h5">"Movie Not found"</Typography>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            alt={movie.title}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MovieDetails;
