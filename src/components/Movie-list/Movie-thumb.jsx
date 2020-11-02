import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/filmThumb.png";
import AOS from "aos";
import "aos/dist/aos.css";


const MovieThumb = ({movie, order}) => {
  const { id, archive, thumb, genre, director, roles, year, duration, name, short} = movie;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div
      className="movie-thumb-wrap"
      data-aos="fade-up"
      data-aos-delay={200}
    >
    <NavLink
      to={`/movie/${id}`}
      className={`movie-thumb ${archive ? "archive" : ""}`}
    >
      <img className="movie-image" src={thumb} alt="movie" />
      {!archive ? (
        <div className="movie-info">
          <div className="movie-info-block movie-info-block__top">
            <div className="genre">{genre}</div>
            <div className="credits">
              <div className="credit">
                <h4 className="credit-title">Режисер</h4>
                <span> - </span>
                <span className="credit-text">{director}</span>
              </div>
              <div className="credit">
                <h4 className="credit-title">У ролях</h4>
                <span> - </span>
                <span className="credit-text">{roles}</span>
              </div>
            </div>
          </div>
          <div className="movie-info-block movie-info-block__bottom">
            <div className="numbers">
              <div className="number">{year}</div>
              <div className="number">{duration}</div>
            </div>
            <h2 className="name">{name}</h2>
            <div className="about">{short}</div>
          </div>
        </div>
      ) : (
        <div className="movie-info-archive">
          <div className="movie-year">{year}</div>
        </div>
      )}
    </NavLink>
    </div>
  );
};

export default MovieThumb;
