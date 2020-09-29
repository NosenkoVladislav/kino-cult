import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Navbar from "./components/navbar";
import FilmThumb from "./components/film-thumb";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Route
                path="/"
                exact
            >
                Home
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

            <div className="container">
                <div className="grid-content">
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
        </div>
    );
}

export default App;
