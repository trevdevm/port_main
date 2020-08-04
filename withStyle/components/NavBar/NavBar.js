import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navItems">
        <NavLink id="home" to="/" style={{ color: "#32558c" }} activeStyle={{ color: "#fffbee" }}>
          HOME
        </NavLink>
        <br></br>
        <NavLink id="about" to="/about" style={{ color: "#32558c" }} activeStyle={{ color: "#fffbee" }}>
          ABOUT
        </NavLink>
        <br></br>
        <NavLink id="contact" to="/contact" style={{ color: "#32558c" }} activeStyle={{ color: "#fffbee" }}>
          CONTACT
          <br></br>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
