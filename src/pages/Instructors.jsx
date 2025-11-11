import React from "react";
import "./Instructors.css";
import { NavLink } from "react-router-dom";
import Nancy from "../assets/Homeimage/Nancy.png";
import Henry from "../assets/Homeimage/Henry.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Ethan from "../assets/Homeimage/Ethan.png";

function Instructors() {
  return (
    <>
      <div className="instruct">
        <div className="title">
          <h2>Instructors</h2>
          <div className="Allcourse">
            <button>
              All Courses <select name="All courses" id="All courses"></select>
            </button>
          </div>
        </div>
        <br />
        <div className="teacher">
          <div className="inimage">
            <div>
              <img src={Nancy} alt="nancy" className="picture" />
            </div>
            <div>
              <p>
                <b>NANCY WHITE</b>
              </p>
              <br />
              <p>
                <b>COURSE:</b> UI/UX Design, Graphic Design, Digital Marketing
              </p>
            </div>
          </div>
          <div className="visit">
            <button>
              <nav className="nav">
                <NavLink to="/instructorprofile" className="link">
                  Visit Profile
                </NavLink>
              </nav>
            </button>
          </div>
        </div>
        <br />
        <div className="teacher">
          <div className="inimage">
            <div>
              <img src={Henry} alt="Henry" className="picture" />
            </div>
            <div>
              <p>
                <b>HENRY SMITH</b>
              </p>
              <br />
              <p>
                <b>COURSE:</b>Data Science, MERN Stack
              </p>
            </div>
          </div>
          <div className="visit">
            <button>Visit Profile</button>
          </div>
        </div>
        <br />
        <div className="teacher">
          <div className="inimage">
            <div>
              <img src={Charlotte} alt="Charlotte" className="picture" />
            </div>
            <div>
              <p>
                <b>CHARLOTTE</b>
              </p>
              <br />
              <p>
                <b>COURSE:</b>Web Development, Brand Management
              </p>
            </div>
          </div>
          <div className="visit">
            <button>Visit Profile</button>
          </div>
        </div>
        <br />
        <div className="teacher">
          <div className="inimage">
            <div>
              <img src={Jordan} alt="Jordan" className="picture" />
            </div>
            <div>
              <p>
                <b>JORDAN</b>
              </p>
              <br />
              <p>
                <b>COURSE:</b>Project Management, Public Speaking & Presentation
                Skills
              </p>
            </div>
          </div>
          <div className="visit">
            <button>Visit Profile</button>
          </div>
        </div>
        <br />
        <div className="teacher">
          <div className="inimage">
            <div>
              <img src={Ethan} alt="Ethan" className="picture" />
            </div>
            <div>
              <p>
                <b>ETHAN</b>
              </p>
              <br />
              <p>
                <b>COURSE:</b>Business Analytics, 3D Modeling and Animation
              </p>
            </div>
          </div>
          <div className="visit">
            <button>Visit Profile</button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Instructors;
