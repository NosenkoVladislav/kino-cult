import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

const Hamburger = ({ navItems, state }) => {
  let menu = useRef(null);
  let revalMenu = useRef(null);
  let revalMenuBackground = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revalMenu, revalMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.easeInOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([revalMenuBackground, revalMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReval(revalMenuBackground, revalMenu);
      staggerText(link1, link2, link3);
    }
  }, [state]);

  const staggerReval = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.4,
      height: 100,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.easeInOut",
      stagger: {
        amount: 0.4,
      },
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.4,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  // Hover on the link
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revalMenuBackground = el)}
        className="menu-secondary-background-color"
      >
        <div ref={(el) => (revalMenu = el)} className="menu-layer">
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link1 = el)}
                        to="/"
                      >
                        Культ <br className="word-break" /> завтрашнього дня
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link2 = el)}
                        to="/winners"
                      >
                        Переможці-2019
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (link3 = el)}
                        to="/archive"
                      >
                        Архів
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="social">
                <div className="social-title">Соцмережі:</div>
                <Link to="#">
                  <FacebookIcon />
                </Link>
                <Link to="#">
                  <InstagramIcon />
                </Link>
                <Link to="#">
                  <TelegramIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
