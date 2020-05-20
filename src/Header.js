import React from "react";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="header__title">
      <span className="title__icon">
        <i class="fas fa-play-circle"></i>
      </span>
      MovieApp | NomadCoder
    </div>
    <ul className="header__items">
      <li className="header__item">
        <span>
          <i class="fas fa-search"></i>
        </span>
      </li>
      <li className="header__item">Cart</li>
      <li className="header__item">Login</li>
    </ul>
  </div>
);

export default Header;
