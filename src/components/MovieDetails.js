import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../redux/moviesSlice";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Chip, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(2),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    margin: "auto",
    boxShadow: theme.shadows[5],
  },
  media: {
    width: "100%",
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    position: "relative",
  },
  mediaImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    flex: 1,
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useSelector((state) => state.movies.details);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (!movie) return <Typography variant="h5">Movie Not found</Typography>;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.media}>
          <img
            className={classes.mediaImage}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <CardContent className={classes.content}>
          <Typography variant="h4" className={classes.title}>
            {movie.title}
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Overview
          </Typography>
          <Typography variant="body1">{movie.overview}</Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Release Date
          </Typography>
          <Typography variant="body1">{movie.release_date}</Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Runtime
          </Typography>
          <Typography variant="body1">{movie.runtime} minutes</Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Genres
          </Typography>
          <div>
            {movie.genres &&
              movie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  className={classes.chip}
                />
              ))}
          </div>
          <Typography variant="h6" className={classes.subtitle}>
            Production Companies
          </Typography>
          <div>
            {movie.production_companies &&
              movie.production_companies.map((company) => (
                <Chip
                  key={company.id}
                  label={company.name}
                  className={classes.chip}
                />
              ))}
          </div>
          <Typography variant="h6" className={classes.subtitle}>
            Homepage
          </Typography>
          <Link href={movie.homepage} target="_blank" rel="noopener noreferrer">
            {movie.homepage}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;
