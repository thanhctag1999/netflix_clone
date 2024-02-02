import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_menus">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="header_menus-link">
          <NavLink className="header_menus-item" to="/">
            Home
          </NavLink>
          <NavLink className="header_menus-item" to="/tv-shows">
            TV Shows
          </NavLink>
          <NavLink className="header_menus-item" to="/movies">
            Movies
          </NavLink>
          <NavLink className="header_menus-item" to="/lastes">
            Lastes
          </NavLink>
          <NavLink className="header_menus-item" to="/my-list">
            My List
          </NavLink>
        </div>
      </div>
      <div className="header-actions">
        <img src="./icons/search.png" alt="" />
        <h5>Kids</h5>
        <img src="./icons/bell.png" alt="" />
        <img className="avatar" src="./images/avatar.jpg" alt="" />
        <img className="avatar" src="./icons/down.png" alt="" />
      </div>
    </div>
  );
}
