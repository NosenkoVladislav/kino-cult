import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./pages/main";
import FilmDetail from "./pages/film-detail";

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Route path="/" exact>
                <Main/>
            </Route>
            <Route path="/winners-2019" exact>
                Winners 2019
            </Route>
            <Route path="/archive" exact>
                Archive
            </Route>
            <Route path="/film/:id" exact>
                <FilmDetail/>
            </Route>
        </div>
    );
}

export default App;
