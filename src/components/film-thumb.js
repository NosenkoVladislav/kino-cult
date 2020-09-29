import React from "react";
import img from "../images/filmThumb.png";

const FilmThumb = () => {
    return (
        <div className="film-thumb">
            <img className="film-image" src={img} alt="film"/>
            <div className="film-info">
                <div className="genre">драма</div>
                <div className="credits">
                    <div className="credit">
                        <div className="credit-title">Режисер -</div>
                        <div className="credit-text">Вікторія Трохименко</div>
                    </div>
                    <div className="credit">
                        <div className="credit-title">У ролях</div>
                        <div className="credit-text">Ґольшіфтег Фарагані, Мадж Мастура,
                            Айша Бен Мілед
                        </div>
                    </div>
                </div>
                <div className="numbers">
                    <div className="number">2020 рік</div>
                    <div className="number">123 хв</div>
                </div>
                <div className="name">Брати остання сповідь</div>
                <div className="about">
                    Історія любові та ненависті двох братів, які доживають віку в карпатському селі. Історія любові та
                    ненависті двох братів, які доживають віку в карпатському селі.
                </div>
            </div>
        </div>
    )
};

export default FilmThumb;