import React from "react";
import Homelogo from "../assets/Homeimage/Homelogo.png";
import Instructors from "../assets/Homeimage/Instructors.png";
import Courses from "../assets/Homeimage/Courses.png";
import Certifications from "../assets/Homeimage/Certifications.png";
import Students from "../assets/Homeimage/Students.png";
import Elearning from "../assets/Homeimage/Elearning.png";
import "./Home.css";
import { FaBook } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Uiux from "../assets/Homeimage/Uiux.png";
import Nancy from "../assets/Homeimage/Nancy.png";
import Graphics from "../assets/Homeimage/Graphics.png";
import Datascience from "../assets/Homeimage/Datascience.png";
import Henry from "../assets/Homeimage/Henry.png";
import Mern from "../assets/Homeimage/Mern.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Web from "../assets/Homeimage/Web.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Project from "../assets/Homeimage/Project.png";
import Digital from "../assets/Homeimage/Digital.png";
import Ethan from "../assets/Homeimage/Ethan.png";
import Business from "../assets/Homeimage/Business.png";
import Brand from "../assets/Homeimage/Brand.png";
import Public from "../assets/Homeimage/Public.png";
import Modeling from "../assets/Homeimage/Modeling.png";
import Henry6 from "../assets/Homeimage/Henry6.png";
import Henry61 from "../assets/Homeimage/Henry61.png";
import Nancy6 from "../assets/Homeimage/Nancy6.png";
import Nancy61 from "../assets/Homeimage/Nancy61.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Jamessmith from "../assets/Homeimage/Jamessmith.png";
import Jameswhite from "../assets/Homeimage/Jameswhite.png";
import Nancysmith from "../assets/Homeimage/Nancysmith.png";
import Stars from "../assets/Homeimage/Stars.png";

function Home() {
  return (
    <>
      <div className="home1">
        <div className="home-text">
          <h1>
            Empower Your Future with New Skills <br /> – Learn Anytime,
            Anywhere!
          </h1>
          <br />
          <p>
            Unlock your potential with our diverse courses! Learn at your own
            pace with expert-led <br /> lessons, and gain the skills you need to
            excel in your chosen field. Start today!
          </p>
          <br />
          <button>Join Now</button>
        </div>
        <div>
          <img src={Homelogo} alt="Homelogo" width={"424px"} />
        </div>
      </div>

      <div className="home2">
        <div className="home-text2">
          <img src={Instructors} alt="instructors" width={"150px"} />
          <div>
            <h1>100+</h1>
            <p>Instructors</p>
          </div>
        </div>
        <div className="home-text2">
          <img src={Courses} alt="Courses" width={"150px"} />
          <div>
            <h1>500+</h1>
            <p>Courses</p>
          </div>
        </div>
        <div className="home-text2">
          <img src={Certifications} alt="Certification" width={"150px"} />
          <div>
            <h1>Free</h1>
            <p>Certifications</p>
          </div>
        </div>
        <div className="home-text2">
          <img src={Students} alt="Students" width={"150px"} />
          <div>
            <h1>1000+</h1>
            <p>Students</p>
          </div>
        </div>
      </div>

      <div className="home3">
        <h1>Why Choose Us</h1>
        <br />
        <p>
          We offer high-quality courses, expert instructors, and flexible
          learning, empowering you to learn at your own pace and achieve your
          goals.
        </p>
      </div>

      <div className="home4">
        <div>
          <img src={Elearning} alt="elearning" width={"500px"} />
        </div>

        <div className="hometext4">
          <div className="card">
            <h3>
              <FaBook />
              Diverse Course Options
            </h3>
            <p>
              Something for everyone, from beginners to <br />
              advanced learners.
            </p>
          </div>

          <div className="card">
            <h3>
              <IoNewspaper />
              Affordable Pricing
            </h3>
            <p>
              Access to free resources <br /> and trial courses.
            </p>
          </div>

          <div className="card1">
            <h3>
              <HiOutlineLightBulb />
              Flexible Learning
            </h3>
            <p>
              Access courses anytime, <br />
              anywhere, at your own pace.
            </p>
          </div>

          <div className="card1">
            <h3>
              <RiVerifiedBadgeLine />
              Certification of Completion
            </h3>
            <p>
              Earn a certificate to showcase your skills <br /> and
              achievements.
            </p>
          </div>
        </div>
      </div>

      <div className="home5">
        <p>Some of our most popular courses</p> <br />
        <div className="explore">
          <h3>Explore Our Courses</h3> <br />
        </div>
        <div className="course-list">
          {/* Course Card 1 */}
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

          {/* Course Card 2 */}
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

          {/* Course Card 3 */}
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

          {/* Course Card 4 */}
          <div className="course-card">
            <img src={Mern} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>MERN Stack | 3 Months</h3>
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

          {/* Course Card 5 */}
          <div className="course-card">
            <img src={Web} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Web Development | 2.5 Months</h3>
              <div className="instructor">
                <img src={Charlotte} alt="henry" className="instructor-img" />
                <span>By Charlotte</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="course-card">
            <img src={Project} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Project Management | 2.5 Months</h3>
              <div className="instructor">
                <img src={Jordan} alt="henry" className="instructor-img" />
                <span>By Jordan</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 7 */}
          <div className="course-card">
            <img src={Digital} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Digital Marketing | 3 Months</h3>
              <div className="instructor">
                <img src={Nancy} alt="henry" className="instructor-img" />
                <span>By Nancy White</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 8*/}
          <div className="course-card">
            <img src={Business} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Business Analytics| 3 Months</h3>
              <div className="instructor">
                <img src={Ethan} alt="henry" className="instructor-img" />
                <span>By Ethan</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 9 */}
          <div className="course-card">
            <img src={Brand} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Brand Management | 1.5 Months</h3>
              <div className="instructor">
                <img src={Charlotte} alt="henry" className="instructor-img" />
                <span>By Charlotte</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 10 */}
          <div className="course-card">
            <img src={Public} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>Public Speaking & Presentation Skills | 1 Month</h3>
              <div className="instructor">
                <img src={Jordan} alt="henry" className="instructor-img" />
                <span>By Jordan</span>
              </div>
              <div className="actions">
                <button className="add-cart">Add to cart</button>
                <FaHeart />
              </div>
              <button className="view-course">View Course</button>
            </div>
          </div>

          {/* Course Card 11*/}
          <div className="course-card">
            <img src={Modeling} alt="Mern" className="course-img" />
            <div className="course-content">
              <div className="price-review">
                <span className="price">Rs. 10,000</span>
                <span className="review">REVIEWS</span>
              </div>
              <h3>3D Modeling and Animation | 3 Months</h3>
              <div className="instructor">
                <img src={Ethan} alt="henry" className="instructor-img" />
                <span>By Ethan</span>
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

      <div className="home6">
        <h2>Our Team</h2>
        <div className="team">
          <div className="team-text">
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

          <div className="team-text">
            <img src={Nancy6} alt="Henry" /> <br />
            <h3>Nancy White</h3> <br />
            <p>Manager</p> <br />
            <div className="icon">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className="team-text">
            <img src={Henry61} alt="Henry" /> <br />
            <h3>Henry Smith</h3> <br />
            <p>Marketing Head</p> <br />
            <div className="icon">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className="team-text">
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
export default Home;
