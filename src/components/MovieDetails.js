import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../redux/moviesSlice";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Chip, Link } from "@mui/material";
import { CircularProgress } from "@mui/material";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useSelector((state) => state.movies.details);
  const status = useSelector((state) => state.movies.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (!movie) return <Typography variant="h5">Movie Not found</Typography>;

  return (
    <div style={{ marginTop: "84px" }}>
      {status === "loading" ? (
        // Show spinner while loading
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            marginTop: "84px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 800,
              margin: "auto",
              boxShadow: 5,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 0,
                paddingTop: "75%",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <CardContent sx={{ flex: 1, padding: 2 }}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {movie.title}
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Overview
              </Typography>
              <Typography variant="body1">{movie.overview}</Typography>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Release Date
              </Typography>
              <Typography variant="body1">{movie.release_date}</Typography>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Runtime
              </Typography>
              <Typography variant="body1">{movie.runtime} minutes</Typography>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Genres
              </Typography>
              <div>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <Chip
                      key={genre.id}
                      label={genre.name}
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
              </div>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Production Companies
              </Typography>
              <div>
                {movie.production_companies &&
                  movie.production_companies.map((company) => (
                    <Chip
                      key={company.id}
                      label={company.name}
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  ))}
              </div>
              {movie.homepage && (
                <>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    Homepage
                  </Typography>
                  <Link
                    href={movie.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {movie.homepage}
                  </Link>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
