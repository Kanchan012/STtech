import React from "react";
import Nancy from '../assets/Homeimage/Nancy.png'
import { NavLink } from "react-router-dom";
import './Instructorprofile.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Uiux from "../assets/Homeimage/Uiux.png";
import Graphics from "../assets/Homeimage/Graphics.png";
import Datascience from "../assets/Homeimage/Datascience.png";
import Henry from "../assets/Homeimage/Henry.png"
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import Stars from "../assets/Homeimage/Stars.png";

function Instructorprofile() {
  return (
    <>
    <div className="profile">
      <div className="profile-text">
        <p>Hey I am,</p>
        <h2>Nancy White</h2>
        <p>
          I am a professional UI/UX Designer, Graphic Designer, and instructor
          dedicated to helping you master design <br />principles and create impactful
          digital experiences.
        </p> <br />

        <button>
          <NavLink to="/contact" className="con">
            Contact Now
          </NavLink></button> <br />

        <table border={"2"}>
          <thead>
            <tr>
              <th>5 Yrs</th> 
              <th>8</th>
              <th>25</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Experience</td> 
              <td>Projects Completed</td>
              <td>Students</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <img src={Nancy} alt="nancy " width={"220px"} height={"300px"} />
      </div>
    </div>

    <div className="about">
        <div>
            <img src={Nancy} alt="nancy " width={"220px"} height={"300px"} />
             <div className="symbol">
                          <FaFacebook /> 
                          <FaInstagram />
                          <FaLinkedin />
                        </div>
        </div>
        <div className="about-text">
            <h2>About Me</h2>
            <p>As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs</p>
            <button>My Projects</button>
        </div>
    </div>

    <div className="course">
        <h2>My Courses</h2>
        <p>Explore the courses I teach, designed to enhance your skills and knowledge step by step.</p> <br />
         <div className="course-list">
                  <div className="course-card">
                    <img src={Uiux} alt="UI/UX Designs" className="course-img" />
                    <div className="course-content">
                      <div className="price-review">
                        <span className="price">Rs. 10,000</span>
                        <span className="review">REVIEWS</span>
                      </div>
                      <h3>UI/UX Design | 2.5 Months</h3>
                      <div className="instructor">
                        <img src={Nancy} alt="Nancy White" className="instructor-img" />
                        <span>By Nancy White</span>
                      </div>
                      <div className="actions">
                        <button className="add-cart">Add to cart</button>
                        <FaHeart />
                      </div>
                      <button className="view-course">View Course</button>
                    </div>
                  </div>
        
                  <div className="course-card">
                    <img src={Graphics} alt="React Mastery" className="course-img" />
                    <div className="course-content">
                      <div className="price-review">
                        <span className="price">Rs. 10,000</span>
                        <span className="review">REVIEWS</span>
                      </div>
                      <h3>Graphic Design | 3 Months</h3>
                      <div className="instructor">
                        <img src={Nancy} alt="Nancy" className="instructor-img" />
                        <span>By Nancy White</span>
                      </div>
                      <div className="actions">
                        <button className="add-cart">Add to cart</button>
                        <FaHeart />
                      </div>
                      <button className="view-course">View Course</button>
                    </div>
                  </div>
        
                  <div className="course-card">
                    <img src={Datascience} alt="datascience" className="course-img" />
                    <div className="course-content">
                      <div className="price-review">
                        <span className="price">Rs. 10,000</span>
                        <span className="review">REVIEWS</span>
                      </div>
                      <h3>Data Science | 3 Months</h3>
                      <div className="instructor">
                        <img src={Henry} alt="henry" className="instructor-img" />
                        <span>By Henry Smith</span>
                      </div>
                      <div className="actions">
                        <button className="add-cart">Add to cart</button>
                        <FaHeart />
                      </div>
                      <button className="view-course">View Course</button>
                    </div>
                  </div>
                  </div>
    </div>

    <div className="contact">
        <h2>Contact Me</h2> <br />
        <div className="ec">
            <div className="ec1">
            <MdCall className="call"/> 
            <p><b>Phone Number</b></p>
            <p>+977 9800000000</p>
        </div>
        <div className="ec1">
            <IoIosMail className="call"/>
            <p><b>Email</b></p>
            <p>example@gmail.com</p>
        </div>
        </div>
    </div>

    <div className="home7">
            <h2>Testimonials</h2><br />
            <p>
              “Hear from our students! Discover how our courses have empowered learners to achieve their goals and unlock new opportunities.Real stories, real success!”
            </p>
    
            <div className="h7">
              <div className="home7text">
                <img src={Jamessmith} alt="jamessmith" className="pic" /> 
                <img src={Stars} alt="stars" width={"110px"} />
                <h3>James Smith</h3>
                <h6>Student </h6><br />
                
                <p>
                  “Amazing platform! The lessons are clear, and the instructors are
                  top-notch.”
                </p>
              </div>
    
              <div className="home7text">
                <img src={Jameswhite} alt="jameswhite" className="pic" />
                  <img src={Stars} alt="stars"  width={"110px"} />
                  <h3>James White</h3>
                  <h6>Student</h6><br />
                  <p>
                    “The course exceeded my expectations. I can’t wait to take
                    another one!”
                  </p>
              </div>
    
              <div className="home7text">
                <img src={Nancysmith} alt="nancysmith" className="pic" />
                <img src={Stars} alt="stars"  width={"110px"} />
                <h3>Nancy Smith</h3>
                <h6>Student</h6> <br />
                <p>
                  “The courses are well-structured and easy to follow. I learned so
                  much!”
                </p>
              </div>
            </div>
          </div>
    </>
    
  );
}

export default Instructorprofile;
