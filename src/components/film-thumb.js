import React, {useEffect, useRef} from "react";
import img from "../images/filmThumb.png";
import {gsap} from "gsap";

const FilmThumb = (props) => {
    let topContent = useRef(null);
    let botContent = useRef(null);

    const mouseOver = () => {
        gsap.to([topContent], 0, {
            duration: .8,
            ease: "power3.In",
            y: 50,
            opacity: 1,
        });

        gsap.to([botContent], 0, {
            duration: .8,
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
        });
        gsap.to([botContent], 0, {
            y: 0,
            ease: "power3.Out",
        });
    };

    const filmProps =
        {
            genre: "драма",
            name: "Брати. Остання сповідь ",
            year: "2020",
            duration: "123 хв",
            director: "Вікторія Трохименко",
            roles: "Ґольшіфтег Фарагані, Мадж Мастура, Айша Бен Мілед",
            about: "Історія любові та ненависті двох братів, які доживають віку в карпатському селі. Історія любові та ненависті двох братів, які доживають віку в карпатському селі.",
            image: ""
        }
    ;


    return (
        <div className="film-thumb" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
            <img className="film-image" src={img} alt="film"/>
            <div className="film-info">
                <div
                    ref={el => (topContent = el)}
                    className="film-info-block film-info-block__top"
                >
                    <div className="genre">{filmProps.genre}</div>
                    <div className="credits">
                        <div className="credit">
                            <h4 className="credit-title">Режисер </h4>
                            <span> - </span>
                            <span className="credit-text">{filmProps.director}</span>
                        </div>
                        <div className="credit">
                            <h4 className="credit-title">У ролях</h4>
                            <span> - </span>
                            <span className="credit-text">{filmProps.roles}
                        </span>
                        </div>
                    </div>
                </div>
                <div
                    ref={el => (botContent = el)}
                    className="film-info-block film-info-block__bottom"
                >
                    <div className="numbers">
                        <div className="number">{filmProps.year}</div>
                        <div className="number">{filmProps.duration}</div>
                    </div>
                    <h2 className="name">{filmProps.name}</h2>
                    <div className="about">{filmProps.about}</div>
                </div>
            </div>
        </div>
    )
};

export default FilmThumb;