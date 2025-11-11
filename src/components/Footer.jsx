import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/Homeimage/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foot">
          <div className="footer1">
            <div className="logotext">
              <img src={Logo} alt="Logo" width={"40px"} />
              <h1>S.T. Tech</h1>
            </div>{" "}
            <br />
            <p>
              <b>S.T. Tech</b> is an e-learning platform offering practical,
              <br />
              engaging, and accessible courses designed to help <br />
              students build skills and achieve their goals.
            </p>
          </div>

          <div className="footer2">
            <h3>About</h3> <br />
            <ul>
              <li>Blog</li>
              <li>About Us</li>
              <li>Team</li>
              <li>Instructors</li>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          <div className="footer3">
            <h3>Links</h3> <br />
            <ul>
              <li>Home</li>
              <li>Dashboard</li>
              <li>FAQs</li>
              <li>Services</li>
              <li>Why us?</li>
            </ul>
          </div>

          <div className="footer4">
            <h3>Programs</h3> <br />
            <ul>
              <li>IT Courses</li>
              <li>Designing Courses</li>
              <li>Marketing Courses</li>
              <li>Business Courses</li>
              <li>Public Development Courses</li>
              <li>Creative Arts Courses</li>
            </ul>
          </div>

          <div className="footer5">
            <h3>Address</h3> <br />
            <ul>
              <li>
                <FaLocationDot /> Location
              </li>
              <li>
                <MdCall /> Call +977 9800000000
              </li>
              <li>
                <IoIosMail /> example@gmail.com
              </li>
              <li>
                <FaCalendarAlt /> Monday-Friday
              </li>
            </ul>
          </div>
        </div>
        <div className="follow">
          <h2>FOLLOW US ON</h2>
          <div className="reicon">
            <FaFacebook  className="reacticon"/> 
            <FaInstagram  className="reacticon"/>
            <FaLinkedin  className="reacticon"/>
          </div>
            <hr class="straight-line"/>
        </div>
      <div className="f6">
        <p>Refund & Return Policy</p>
        <p>&copy; 2024 S.T. Tech. All rights reserved.</p>
      </div>
      </footer>
    </>
  );
}

export default Footer;
