import React from "react";
import SectionTitle from "../components/section-title";
import FilmThumb from "../components/film-thumb";

const Archive = ({films}) => {
    return (
        <div className="container">
            <section className="section">
                <SectionTitle to="/" title="Програма"/>
                <div className="grid-content grid-content__three">
                    {films.map((film) => {
                        return (
                            !film.archive ?
                                <FilmThumb film={film} key={film.name}/>
                                : null
                        )
                    })}
                </div>
            </section>
            <section className="section">
                <SectionTitle to="/" title="Фото"/>

            </section>
            <section className="section">
                <SectionTitle to="/" title="Іміджеві ролики"/>

            </section>
        </div>
    )
};

export default Archive;