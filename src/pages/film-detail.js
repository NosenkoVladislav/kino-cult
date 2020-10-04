import React from "react";

const film =
    {
        id: 1,
        genre: "драма",
        name: "Брати. Остання сповідь ",
        year: "2020",
        duration: "123 хв",
        director: "Вікторія Трохименко",
        roles: "Ґольшіфтег Фарагані, Мадж Мастура, Айша Бен Мілед",
        about: "Історія любові та ненависті двох братів, які доживають віку в карпатському селі. Історія любові та ненависті двох братів, які доживають віку в карпатському селі.",
        image: "images/filmThumb.png",
        country: "Франція",
        achievements: "",
        archive: false
    };

const FilmDetail = (props) => {
    return (
        <div className="film-detail-page">
            <div className="player-section">

            </div>
            <div className="container">
                <div className="film-info">
                    <div className="film-info-section">
                        <div className="info-block">
                            <div className="info-title">Рік</div>
                            <div className="info-text">{film.year}</div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">Тривалість</div>
                            <div className="info-text">{film.duration}</div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">Країна</div>
                            <div className="info-text">{film.country}</div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">Участь у фестивалях/нагороди</div>
                            <div className="info-text">{!film.achievements ? "—" : film.achievements}</div>
                        </div>
                    </div>
                    <div className="film-info-section">
                        <div className="info-block">
                            <div className="info-title">Режисер</div>
                            <div className="info-text">{film.director}</div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">У ролях</div>
                            <div className="info-text">{film.roles}</div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">Синопсис</div>
                            <div className="info-text">{film.about}</div>
                        </div>
                    </div>
                    <div className="film-info-section film-info-section__contacts">
                        <div className="info-block">
                            <div className="info-title">Контакти режисера/правовласників</div>
                            <div className="info-text">
                                ITALIAN PRESS OFFICE: Giulia Martinez
                                Via Leonardo Da Vinci 52
                                90145 – Palermo, Italy
                                Via Paolo Bentivoglio 29B
                                00165 – Rome Italy
                                Tel. +39 3357189949
                                giuliamarpress@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="film-info-section">
                        <div className="info-block">
                            <div className="info-title">Programmer’s statement</div>
                            <div className="info-text">
                                I wanted to make a film about the generation of my parents, the
                                one that fought in and survived World War II with a conviction that it was honorable to
                                die “for Homeland, for Stalin” and an unconditional trust in the goals of communism: to
                                create a new society through efforts of millions of people. I wanted to reconstruct with
                                the utmost accuracy the events that really happened, and an era in which history
                                revealed the unbridgeable gap between communist ideals and the tragic reality of facts.…
                            </div>
                        </div>
                        <div className="info-block">
                            <div className="info-title">Director’s statement</div>
                            <div className="info-text">
                                I wanted to make a film about the generation of my parents, the
                                one that fought in and survived World War II with a conviction that it was honorable to
                                die “for Homeland, for Stalin” and an unconditional trust in the goals of communism: to
                                create a new society through efforts of millions of people. I wanted to reconstruct with
                                the utmost accuracy the events that really happened, and an era in which history
                                revealed the unbridgeable gap between communist ideals and the tragic reality of facts.…
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FilmDetail;