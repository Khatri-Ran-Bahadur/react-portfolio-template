import React from "react";
import { Link } from "react-router-dom";
import links from "../../../constants/Links";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="">
          <div className="social text-center">
            <a href="#">
              <i className="facebook fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="instagram fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="youtube fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="twitter fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <ul className="nav footer-navbar" id="footer-navbar">
            {links &&
              links.map((item, i) => (
                <li className="nav-item active" key={i}>
                  <Link className="nav-link" to={item.url}>
                    {item.text}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="powerby text-center">
          <p className="para">Design By: Ran Bahadur kc </p>
        </div>
        <hr />
      </div>
      <div className="copyrights text-center container-fluid">
        <p className="para">
          Copyright 2020 <span>Sathi soft Pvt. Ltd</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
