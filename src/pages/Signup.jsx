import React from "react";
import { NavLink } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import Log from "../assets/Homeimage/Log.png";
import Logo from "../assets/Homeimage/Logo.png";
import "./Signup.css";
function Signup() {
  return (
    <>
      <div className="signing">
        <div className="signup-right">
          <div className="sign">
            <img src={Logo} alt="Logo" />
            <h2>S.T.Tech</h2>
          </div>
          <div className="sign1">
            <h3>Empower Your Learning Journey –</h3>
            <h3>Welcome to S.T. Tech!</h3>
            <img src={Log} />
          </div>
        </div>

        <div className="signup-left">
          <div>
          <h2>Sign up to S.T. Tech</h2>
          <button className="signup-btn">
            <div>
              <FaGoogle />
            </div>
            <div>Continue with Google</div>
          </button>
        </div>
        <div className="or-divider">or </div>

        <form className="signup-form">
          <div className="lab">
            <div className="name">
              <label> <b>Full Name</b> </label><br />
              <input type="text" />
            </div>
            <div className="name">
              <label> <b>Username</b> </label><br />
              <input type="text" />
            </div>
          </div>
          <label>
            <b>Email Address</b>
          </label>
          <input type="email" />
          <label>
            <b>Password</b>
          </label>
          <input type="password" /> <IoEyeOutline className="pw-icon" />
          <label>
            <b>Confirm password</b>
          </label>
          <input type="Confirm password" /> <IoEyeOutline className="pw-icon" />
          <button type="submit" className="signup-submit">
            Sign up
          </button>
        </form>
         <p className="signup-text">
            Already signed in? <a href="#"> 
        <NavLink to="/login" className="link">Log in</NavLink> </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;
