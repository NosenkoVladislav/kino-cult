import React, { useState, useEffect } from "react";
import Player from "../components/Player/Player";
import InfoBlock from "../components/Info-block/Info-block";
import Modal from "../components/Modal/Modal";
import Service from "../service/service";
import VotingStars from "../components/VotingStars/VotingStars";
import AOS from "aos";

const MovieDetail = ({ match, moviePlayHandler, userData, setUserData }) => {
  const [movie, setMovie] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const [isModalShow, setShowModal] = useState(false);
  const [movieRating, setMovieRating] = useState(null);

  const api = new Service();

  useEffect(() => {
    getMovie();
    if (userData) {
      api.getMovieRating(match.params.id, userData.userID).then((rating) => {
        setMovieRating(rating);
      });
    }
  }, [userData]);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const getMovie = () => {
    api.getMovie(match.params.id).then((movie) => {
      setMovie(movie);
      window.scrollTo(0, 0);
    });
  };

  const switchPlaying = (condition) => {
    setPlaying(!isPlaying);
    moviePlayHandler();
  };

  const switchModal = () => {
    setShowModal(!isModalShow);
  };

  const RatingSection = ({ movieRating }) => {
    return movieRating ? (
      <VotingStars disabled={true} ratedStars={movieRating} />
    ) : (
      <button className="btn" onClick={() => setShowModal(true)}>
        Оцінити фільм
      </button>
    );
  };

  return (
    <div className="movie-detail-page">
      <div className="player-section">
        <Player movie={movie} switchPlaying={switchPlaying} />
        <div className={`movie-top-info ${isPlaying ? "hide" : ""}`}>
          <div className="container">
            <span className="movie-genre">{movie.genre}</span>
            <span className="movie-trailer">Дивитись трейлер</span>
            <div className="movie-name">{movie.name}</div>
            {movie.archive ? null : <RatingSection movieRating={movieRating} />}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="movie-info" data-aos="fade-up">
          <div className="movie-info-section">
            <InfoBlock title={"Рік"} child={movie.year} />
            <InfoBlock title={"Тривалість"} child={movie.duration} />
            <InfoBlock title={"Країна"} child={movie.country} />
            <InfoBlock
              title={"Участь у фестивалях/нагороди"}
              child={
                !movie.achievements || movie.achievements === "null"
                  ? "—"
                  : movie.achievements
              }
            />
          </div>
          <div className="movie-info-section">
            <InfoBlock title={"Режисер"} child={movie.director} />
            <InfoBlock title={"У ролях"} child={movie.roles} />
            <InfoBlock title={"Синопсис"} child={movie.about} />
          </div>
          <div className="movie-info-section movie-info-section__contacts">
            <InfoBlock
              title={"Контакти режисера/правовласників"}
              child={
                "ITALIAN PRESS OFFICE: Giulia Martinez Via Leonardo Da Vinci 52\n" +
                "                90145 – Palermo, Italy Via Paolo Bentivoglio 29B 00165 – Rome\n" +
                "                Italy Tel. +39 3357189949 giuliamarpress@gmail.com"
              }
            />
          </div>
          <div className="movie-info-section">
            <InfoBlock
              title={"Programmer’s statement"}
              child={
                "I wanted to make a movie about the generation of my parents, the\n" +
                "                one that fought in and survived World War II with a conviction\n" +
                "                that it was honorable to die “for Homeland, for Stalin” and an\n" +
                "                unconditional trust in the goals of communism: to create a new\n" +
                "                society through efforts of millions of people. I wanted to\n" +
                "                reconstruct with the utmost accuracy the events that really\n" +
                "                happened, and an era in which history revealed the unbridgeable\n" +
                "                gap between communist ideals and the tragic reality of facts.…"
              }
            />
            <InfoBlock
              title={"Director’s statement"}
              child={
                "I wanted to make a movie about the generation of my parents, the\n" +
                "                one that fought in and survived World War II with a conviction\n" +
                "                that it was honorable to die “for Homeland, for Stalin” and an\n" +
                "                unconditional trust in the goals of communism: to create a new\n" +
                "                society through efforts of millions of people. I wanted to\n" +
                "                reconstruct with the utmost accuracy the events that really\n" +
                "                happened, and an era in which history revealed the unbridgeable\n" +
                "                gap between communist ideals and the tragic reality of facts.…"
              }
            />
          </div>
        </div>
      </div>
      {isModalShow ? (
        <Modal
          movie={movie}
          isModalShow={isModalShow}
          switchModal={switchModal}
          userData={userData}
          setUserData={setUserData}
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        />
      ) : null}
    </div>
  );
};

export default MovieDetail;
