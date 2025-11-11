import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import Log from "../assets/Homeimage/Log.png";
import Logo from "../assets/Homeimage/Logo.png";
function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className="logintext">
            <h2>Welcome Back!</h2>
            <p>
              Log in to access your account and continue <br /> your journey
              with us.
            </p>
          </div>

          <form>
            <label>
              <b>Username</b>
            </label>
            <input type="text" />
            <label>
              <b>Password</b>
            </label>
            <input type="password" /> <IoEyeOutline className="eye-icon" />
            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <p>Forgot password? </p>
            </div>
            <button type="submit" className="submit">
              Log in
            </button>
            <div className="or-divider">or </div>
            <button className="google-btn">
              <div>
                <FaGoogle />
              </div>
              <div>Continue with Google</div>{" "}
            </button>
          </form>

          <p className="signup-text">
            New user? <a href="#"> 
        <NavLink to="/signup" className="link">Sign up</NavLink> </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="st">
          <img src={Logo} alt="Logo"/>
           <h2>S.T.Tech</h2>
        </div>
        <div className="st1">
          <h3>Empower Your Learning Journey –</h3>
          <h3>Welcome to S.T. Tech!</h3>
          <img src={Log} />
        </div>
          
        </div>
      </div>
    </>
  );
}

export default Login;
