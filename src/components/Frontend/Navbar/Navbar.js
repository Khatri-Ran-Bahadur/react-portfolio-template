import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../resources/img/rnlogo.PNG";
import links from "../../../constants/Links";
const Navbar = () => {
  return (
    <header className="header_area">
      <div className="main-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              {links &&
                links.map((item, i) => (
                  <li
                    className={i === 0 ? "nav-item active" : "nav-item"}
                    key={i}
                  >
                    <Link className="nav-link" to={item.url}>
                      {item.text} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
