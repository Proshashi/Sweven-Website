import React, { Fragment, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 825px)" });
  const classname = isSmallScreen ? "linksResponsive" : "links";
  // eslint-disable-next-line
  const [background, setBackground] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const animateItemClassName = menuOpen ? "showMenu" : "hideMenu";

  let hideMenu = {
    height: "0",
  };

  const showMenu = {
    opacity: "1",
  };

  const triggerMenu = (e) => {
    setMenuOpen(e.target.checked);
    const all = document.querySelector("*");
    if (e.target.checked === true) {
      all.style.overflowY = "hidden";
    } else {
      all.style.overflowY = "auto";
    }
  };

  const onLinkClick = () => {
    const all = document.querySelector("*");
    setMenuOpen(false);
    all.style.overflowY = "auto";
  };

  document.addEventListener("scroll", () => {
    const space = window.scrollY;
    const nav = document.querySelector(".__sweven_nav");

    if (space > 60) {
      setBackground(true);
      setShowLogoText(true);
      nav.style.background = "white";
      nav.style.boxShadow = "0 0 10px #ccc";
    } else {
      setShowLogoText(false);
      nav.style.background = "transparent";
      nav.style.boxShadow = "0 0 0 #ccc";
    }
  });

  const linksData = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about-us", label: "About" },
    { to: "/contact-us", label: "Contact" },
    { to: "/notices", label: "Notices" },
  ];

  const links = (
    <Fragment>
      {linksData.map(({ to, label }) => {
        return (
          <span
            className={`__sweven_nav-${classname}--item ${animateItemClassName}`}
          >
            <NavLink
              to={to}
              exact
              activeClassName={`__sweven_nav-${classname}--item__active`}
              onClick={onLinkClick}
            >
              {label}
            </NavLink>
          </span>
        );
      })}
    </Fragment>
  );

  return (
    <div className="__sweven_nav">
      <div className="__sweven_nav-logo">
        <Link to="/" onClick={onLinkClick}>
          <img src="./images/logo.svg" alt="" />
        </Link>
        <Link to="/" onClick={onLinkClick}>
          {showLogoText ? (
            menuOpen ? (
              <div
                className="__sweven_nav-logo--text"
                style={{ color: "#fafafa" }}
              >
                Sinc.
              </div>
            ) : (
              <div className="__sweven_nav-logo--text">Sinc.</div>
            )
          ) : null}
        </Link>
      </div>
      <div className="__sweven_nav-links">{links}</div>
      <div className="__sweven_nav-linksResponsive">
        <div>
          <input
            type="checkbox"
            name="nav-ham"
            id="nav-ham"
            onChange={triggerMenu}
            checked={menuOpen}
          />
          <label
            htmlFor="nav-ham"
            className="__sweven_nav-linksResponsive--ham"
          >
            <span className="__sweven_nav-linksResponsive--ham__bars"></span>
          </label>
        </div>

        <div
          className="__sweven_nav-linksResponsive--links"
          style={menuOpen ? showMenu : hideMenu}
        >
          {links}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
