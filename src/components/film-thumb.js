import React, {useRef} from "react";
import {NavLink} from "react-router-dom";
import img from "../images/filmThumb.png";
import {gsap} from "gsap";

const FilmThumb = ({film}) => {
    let topContent = useRef(null);
    let botContent = useRef(null);


    const mouseOver = () => {
        gsap.to([topContent], 0, {
            duration: 1,
            ease: "power3.In",
            y: 50,
            opacity: 1,
        });

        gsap.to([botContent], 0, {
            duration: 1,
            ease: "power3.In",
            y: -65,
            opacity: 1,
        });
    };

    const mouseLeave = () => {
        gsap.to([topContent], 0, {
            y: -50,
            ease: "power3.Out",
            opacity: 0,
            delay: .1
        });
        gsap.to([botContent], 0, {
            y: 0,
            ease: "power3.Out",
            delay: .1
        });
    };

    return (
        <NavLink to={`/film/${film.id}`} className={`film-thumb ${film.archive ? "archive" : null}`}
             onMouseOver={mouseOver}
             onMouseLeave={mouseLeave}
        >
            <img className="film-image" src={film.image} alt="film"/>
            {
                !film.archive
                    ? (
                        <div className="film-info">
                            <div
                                ref={el => (topContent = el)}
                                className="film-info-block film-info-block__top"
                            >
                                <div className="genre">{film.genre}</div>
                                <div className="credits">
                                    <div className="credit">
                                        <h4 className="credit-title">Режисер</h4>
                                        <span> - </span>
                                        <span className="credit-text">{film.director}</span>
                                    </div>
                                    <div className="credit">
                                        <h4 className="credit-title">У ролях</h4>
                                        <span> - </span>
                                        <span className="credit-text">{film.roles}</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                ref={el => (botContent = el)}
                                className="film-info-block film-info-block__bottom"
                            >
                                <div className="numbers">
                                    <div className="number">{film.year}</div>
                                    <div className="number">{film.duration}</div>
                                </div>
                                <h2 className="name">{film.name}</h2>
                                <div className="about">{film.about}</div>
                            </div>
                        </div>
                    )
                    : <div className="film-info-archive">
                        <div className="film-year">{film.year}</div>
                    </div>
            }
        </NavLink>
    )
};

export default FilmThumb;