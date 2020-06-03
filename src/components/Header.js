import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="header__title">
      <span className="title__icon">
        <i className="fas fa-play-circle"></i>
      </span>
      MovieApp | NomadCoder
    </div>
    <ul className="header__items">
      <li className="header__item">
        <span>
          <i className="fas fa-search"></i>
        </span>
      </li>
      <li className="header__item">
        <Link to="/">Home</Link>
      </li>
      <li className="header__item">
        <Link to="/about">About</Link>
      </li>
      <li className="header__item">Login</li>
    </ul>
  </div>
);

export default Header;
