import React from 'react';
import './App.scss';
import {Route, NavLink} from "react-router-dom";
import Navbar from "./components/navbar";
import FilmThumb from "./components/film-thumb";
import SectionTitle from "./components/section-title";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Route
                path="/"
                exact
            >
                <section className="section">
                    <div className="container">
                        <SectionTitle to="/" title={["Культ", <br/>, "завтрашнього дня"]}/>
                        <div className="grid-content grid-content__three">
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                            <FilmThumb/>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <SectionTitle to="/winners-2019" title="Переможці-2019"/>
                        <div className="grid-content grid-content__two">
                            <FilmThumb/>
                            <FilmThumb/>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <SectionTitle to="/archive" title="Архів"/>
                    </div>
                </section>
            </Route>
            <Route
                path="/winners-2019"
                exact
            >
                Winners 2019
            </Route>
            <Route
                path="/archive"
                exact
            >
                Archive
            </Route>
        </div>
    );
}

export default App;
