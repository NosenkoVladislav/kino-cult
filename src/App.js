import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Main from "./pages/Main";
import Archive from "./pages/Archive";
import Winners from "./pages/Winners";
import MovieDetail from "./pages/Movie-detail";
import "./App.scss";
import Service from "./service/service";


function App() {
  const [isMoviePlay, switchMoviePlay] = useState(false);
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState(null);
  const api = new Service();

  useEffect(() => {
    api.getMovies().then((movies) => {
      setMovies(movies);
    });

    if(localStorage.getItem("userID")) {
      setUserData({userID :localStorage.getItem("userID")});
    }
  }, []);

  const moviePlayHandler = () => {
    switchMoviePlay(!isMoviePlay);
  };

  return (
    <div className="app">
      <Navbar isMoviePlay={isMoviePlay} />
      <Route path="/" exact render={() => <Main movies={movies} />} />
      <Route
        path="/winners"
        exact
        render={() => <Winners  movies={movies}/>}
      />
      <Route path="/archive" exact render={() => <Archive movies={movies} />} />
      <Route
        path="/movie/:id"
        exact
        render={({ match }) => (
          <MovieDetail
            match={match}
            moviePlayHandler={moviePlayHandler}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      />
    </div>
  );
}

export default App;
