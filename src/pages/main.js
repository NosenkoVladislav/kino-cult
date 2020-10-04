import React, {Fragment} from "react";
import SectionTitle from "../components/section-title";
import FilmThumb from "../components/film-thumb";


const Main = ({films}) => {
    return (
        <Fragment>
            <section className="section">
                <div className="container">
                    <SectionTitle to="/" title={["Культ", <br key="cultOf"/>, "завтрашнього дня"]}/>
                    <div className="grid-content grid-content__three">
                        {films.map((film) => {
                            return (
                                !film.archive ?
                                    <FilmThumb film={film} key={film.name}/>
                                    : null
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <SectionTitle to="/winners-2019" title="Переможці-2019"/>
                    <div className="grid-content grid-content__two">
                        <FilmThumb film={films[0]}/>
                        <FilmThumb film={films[1]}/>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <SectionTitle to="/archive" title="Архів"/>
                    <div className="grid-content grid-content__two">
                        {
                            films.sort((a, b) => {
                                return b.year - a.year
                            }).map((film) => {
                                return (
                                    film.archive ?
                                        <FilmThumb film={film} key={film.name}/>
                                        : null
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Main;