import * as React from "react";
import "../../components/NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Characters</li>
        <li>Locations</li>
        <li>Episodes</li>
      </ul>
    </div>
  );
};

export default NavBar;
