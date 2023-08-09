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

const PopularMoviesList = () => {
  const [page, setPage] = React.useState(1);
  const popularMovies = useSelector((state) => state.movies.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <ImageList gap={16} cols={4} sx={{ margin: "0 auto", maxWidth: 1200 }}>
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
        <Pagination count={10} page={page} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PopularMoviesList;
