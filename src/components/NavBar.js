import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="nav">
      <Link to="/" className="name" onClick={closeMobileMenu}>
        Mayleen <img src = "https://i.postimg.cc/GpnqgwxK/Screen-Shot-2023-04-01-at-2-24-03-PM.png" id = "nav-pic" alt="nav-pic"/>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
