import React, {Fragment} from "react";
import MovieThumb from "./Movie-thumb";

const MovieList = ({ movies, archived, sorted }) => {
  movies = sorted ? movies.sort((a, b) => b.year - a.year) : movies;

  if(!movies) {
    return null;
  }

  return (
    <Fragment>
      {movies.map((movie, i) => {
        if (archived) {
          return movie.archive ? (
            <MovieThumb movie={movie} key={movie.name} order={i}/>
          ) : null;
        } else {
          return !movie.archive ? (
            <MovieThumb movie={movie} key={movie.name} order={i}/>
          ) : null;
        }
      })}
    </Fragment>
  );
};

export default MovieList;
