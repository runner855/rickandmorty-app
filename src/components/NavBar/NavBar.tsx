import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { NavBarElements } from "../../Utilities/utility";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiRocketThruster className="navbar-icon" />
              Skye
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {NavBarElements.map((item, index) => {
                return (
                  <li className="nav-item">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      {item.navbar_element}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
