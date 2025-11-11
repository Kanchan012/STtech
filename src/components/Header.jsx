import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/Homeimage/Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Header() {
  return (
    <header className="header">
      <div className="logotext">
        <img src={Logo} alt="Logo" width={"40px"} />
        <h1>S.T. Tech</h1>
      </div>
      <nav className="navbar">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="navlink">
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="navlink">
          Courses
        </NavLink>
        <NavLink to="/instructors" className="navlink">
          Instructors
        </NavLink>
        <NavLink to="/about" className="navlink">
          About us
        </NavLink>
        <div className="navlink more">
          More
          <select name="more" id="more">More</select>
        </div>
      </nav>
      <div className="actions">
        <div className="search-box">
          <input type="text" placeholder="Search for anything" />
          <FaSearch />
        </div>
        <NavLink to="/cart" className="navlink">
          <FaCartShopping className="ch" />
        </NavLink>
        <FaRegHeart className="ch" />
        <NavLink to="/login" className="navlink">
          <button className="login-btn">Log in</button>
        </NavLink>

        <button className="register-btn">Register</button>
        <TbWorld className="worldicon" />
      </div>
    </header>
  );
}

export default Header;
