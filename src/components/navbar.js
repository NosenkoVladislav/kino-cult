import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../svg/logoKinoCult.svg";

const navItems = [
    {to: "/", text: "Культ завтрашнього дня"},
    {to: "/winners-2019", text: "Переможці-2019"},
    {to: "/archive", text: "Архів"},
];



const Navbar = (props) => {
    const path = useLocation().pathname.slice(1, 5);
    return (
        <div className={`nav-bar-wrap ${path === "film" ? "transparent" : ""}`}>
            <div className="container">
                <div className="nav-bar">
                    <NavLink
                        to="/"
                        exact
                        className="logo"
                    >
                        <Logo/>
                    </NavLink>
                    <nav className="nav-menu">
                        {navItems.map(({to, text}) => {
                            return <NavLink
                                key={to}
                                to={to}
                                exact
                                className="nav-item"
                            >{text}</NavLink>
                        })}
                    </nav>
                    {/*<div className="nav-menu-btn">*/}
                    {/*    menu*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
};

export default Navbar;