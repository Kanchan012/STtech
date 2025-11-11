import React from "react";
import "./Aboutus.css";
import a1 from "../assets/Homeimage/a1.jpg";
import a2 from "../assets/Homeimage/a2.jpg";
import learn from "../assets/Homeimage/learn.jpg";
import enter from "../assets/Homeimage/enter.jpg";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import Henry6 from "../assets/Homeimage/Henry6.png";
import Henry61 from "../assets/Homeimage/Henry61.png";
import Nancy6 from "../assets/Homeimage/Nancy6.png";
import Nancy61 from "../assets/Homeimage/Nancy61.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
function Aboutus() {
  return (
    <>
      <div className="Aboutpage">
        <div class="about-us">
          <h1>About Us</h1>
          <p>
            Welcome to S.T. Tech, where learning meets innovation. Our mission
            is to make quality education accessible to everyone, everywhere.
            With a wide range of expert-designed courses and interactive
            learning tools, we empower individuals to achieve their goals and
            thrive in their careers. Join our growing community of learners and
            discover a world of knowledge tailored just for you!
          </p>
        </div>
        <div className="aboutimg">
          <img src={a1} alt="a1" className="a1" />
          <img src={a2} alt="a2" className="a2" />
          <img src={a1} alt="a1" className="a1" />
          <img src={a2} alt="a2" className="a2" />
        </div>
        <div className="mission">
          <h2>Mission</h2>
          <br />
          <p>
            To empower individuals through accessible, high-quality education
            that fosters personal growth, professional development, and lifelong
            learning. We aim to break barriers to education by delivering
            innovative, engaging, and practical learning experiences to learners
            worldwide.
          </p>
        </div>
        <div className="learning">
          <div>
            <img src={learn} alt="learn" className="learning-img" />
          </div>
          <div className="learningtext">
            <h2>Vision</h2> <br />
            <p>
              To be a global leader in e-learning, transforming lives by making
              education universally available, bridging the gap between
              knowledge and opportunity, and nurturing a community of empowered,
              skilled, and confident individuals.
            </p>
          </div>
        </div>
        <img src={enter} alt="" className="entern" />
        <div className="sucessbtn">
          <button>
            <b>Success Stories</b>
          </button>
          <p>From a small team to a global platform</p>
        </div>{" "}
        <br />

        <div className="aboutteam">
          <div className="about7text">
            <img src={Jamessmith} alt="jamessmith" className="apic" />
            <h3>James Smith</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="about7text">
            <img src={Jameswhite} alt="jameswhite" className="apic" />
            <h3>James White</h3>
            <br />
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="about7text">
            <img src={Nancysmith} alt="nancysmith" className="apic" />
            <h3>Nancy Smith</h3> <br />
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

          <div className="about6">
                <h2>Our Team</h2>
                <div className="ab">
                  <div className="ab-text">
                    <img src={Henry6} alt="Henry" /> <br />
                    <h3>Henry Smith </h3>
                    <FaChevronCircleLeft className="left" /> <br />
                    <p>Founder</p> <br />
                    <div className="icon">
                      <FaFacebook />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
        
                  <div className="ab-text">
                    <img src={Nancy6} alt="Henry" /> <br />
                    <h3>Nancy White</h3> <br />
                    <p>Manager</p> <br />
                    <div className="icon">
                      <FaFacebook />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
        
                  <div className="ab-text">
                    <img src={Henry61} alt="Henry" /> <br />
                    <h3>Henry Smith</h3> <br />
                    <p>Marketing Head</p> <br />
                    <div className="icon">
                      <FaFacebook />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
        
                  <div className="ab-text">
                    <img src={Nancy61} alt="Henry" /> <br />
                    <h3>Nancy White</h3> <FaChevronCircleRight className="right" />
                    <br />
                    <p>Designer</p> <br />
                    <div className="icon">
                      <FaFacebook />
                      <FaInstagram />
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </>
  );
}

export default Aboutus;
