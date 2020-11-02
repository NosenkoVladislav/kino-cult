import React, { useState, useEffect } from "react";
import { NavLink, useLocation, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../svg/logoKinoCult.svg";
import Hamburger from "../Hamburger/Hamburger";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

const navItems = [
  { to: "/", text: "Культ завтрашнього дня" },
  { to: "/winners", text: "Переможці-2019" },
  { to: "/archive", text: "Архів" },
];

const Header = ({ isMoviePlay, history }) => {
  const path = useLocation().pathname.slice(1, 6);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menu: false,
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({
        clicked: false,
        menu: false,
      });
    });
  });

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menu: true,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menu: false,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menu: true,
      });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <header className={`header ${state.menu ? "fixed" : ""}`}>
      <div
        className={`nav-bar-wrap 
        ${path === "movie" && !state.menu ? "transparent" : ""} 
        ${isMoviePlay ? "hide" : ""}
        `}
      >
        <div className="container">
          <div className="nav-bar">
            <NavLink to="/" exact className="logo">
              <Logo />
            </NavLink>
            <button
              disabled={disabled}
              className={`nav-menu-btn ${
                path === "movie" && !state.menu ? "white" : ""
              } `}
              onClick={handleMenu}
            >
              {/*{state.menu ? <CloseIcon /> : <MenuIcon />}*/}
              {state.menu ? "Закрити" : "Меню"}
            </button>
          </div>
        </div>
      </div>
      <Hamburger navItems={navItems} state={state} />
    </header>
  );
};

export default withRouter(Header);
