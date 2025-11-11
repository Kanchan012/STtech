import React from "react";
import "./Courses.css";
import { FaHeart } from "react-icons/fa6";
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
import { FaShoppingCart } from "react-icons/fa";

function Courses() {
  return (
    <>
     <h2 className="title">Our Courses</h2>
    <div className="courses">
      <div className="category">
        <h4 className="category-title">Category</h4>
        <ul className="category-list">
          <li><input type="checkbox" /> All Courses</li>
          <li><input type="checkbox" /> Free Courses</li>
          <li><input type="checkbox" /> IT Courses</li>
          <li><input type="checkbox" /> Designing Courses</li>
          <li><input type="checkbox" /> Marketing Courses</li>
          <li><input type="checkbox" /> Business Courses</li>
          <li><input type="checkbox" /> Public Development Courses</li>
          <li><input type="checkbox" /> Creative Arts Courses</li>
          
        </ul>
      </div>

       <div className="courselist">
                {/* Course Card 1 */}
                <div className="coursecard">
                  <img src={Uiux} alt="UI/UX Designs" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>UI/UX Design | 2.5 Months</h3>
                    <div className="instruction">
                      <img src={Nancy} alt="Nancy White" className="instruction-img" />
                      <span>By Nancy White</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 2 */}
                <div className="coursecard">
                  <img src={Graphics} alt="React Mastery" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Graphic Design | 3 Months</h3>
                    <div className="instruction">
                      <img src={Nancy} alt="Nancy" className="instruction-img" />
                      <span>By Nancy White</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart /> Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 3 */}
                <div className="coursecard">
                  <img src={Datascience} alt="datascience" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Data Science | 3 Months</h3>
                    <div className="instruction">
                      <img src={Henry} alt="henry" className="instruction-img" />
                      <span>By Henry Smith</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 4 */}
                <div className="coursecard">
                  <img src={Mern} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>MERN Stack | 3 Months</h3>
                    <div className="instruction">
                      <img src={Henry} alt="henry" className="instruction-img" />
                      <span>By Henry Smith</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 5 */}
                <div className="coursecard">
                  <img src={Web} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Web Development | 2.5 Months</h3>
                    <div className="instruction">
                      <img src={Charlotte} alt="henry" className="instruction-img" />
                      <span>By Charlotte</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 6 */}
                <div className="coursecard">
                  <img src={Project} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Project Management | 2.5 Months</h3>
                    <div className="instruction">
                      <img src={Jordan} alt="henry" className="instruction-img" />
                      <span>By Jordan</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 7 */}
                <div className="coursecard">
                  <img src={Digital} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Digital Marketing | 3 Months</h3>
                    <div className="instruction">
                      <img src={Nancy} alt="henry" className="instruction-img" />
                      <span>By Nancy White</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 8*/}
                <div className="coursecard">
                  <img src={Business} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Business Analytics| 3 Months</h3>
                    <div className="instruction">
                      <img src={Ethan} alt="henry" className="instruction-img" />
                      <span>By Ethan</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 9 */}
                <div className="coursecard">
                  <img src={Brand} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Brand Management | 1.5 Months</h3>
                    <div className="instruction">
                      <img src={Charlotte} alt="henry" className="instruction-img" />
                      <span>By Charlotte</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 10 */}
                <div className="coursecard">
                  <img src={Public} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Public Speaking & Presentation Skills | 1 Month</h3>
                    <div className="instruction">
                      <img src={Jordan} alt="henry" className="instruction-img" />
                      <span>By Jordan</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart />Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>

                {/* Course Card 11 */}
                <div className="coursecard">
                  <img src={Public} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>Public Speaking & Presentation Skills | 1 Month</h3>
                    <div className="instruction">
                      <img src={Jordan} alt="henry" className="instruction-img" />
                      <span>By Jordan</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart /> Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
      
                {/* Course Card 12*/}
                <div className="coursecard">
                  <img src={Modeling} alt="Mern" className="courseimg" />
                  <div className="coursecontent">
                    <div className="pricereview">
                      <span className="pr">Rs. 10,000</span>
                      <span className="rev">REVIEWS</span>
                    </div>
                    <h3>3D Modeling and Animation | 3 Months</h3>
                    <div className="instruction">
                      <img src={Ethan} alt="henry" className="instruction-img" />
                      <span>By Ethan</span>
                    </div>
                    <div className="act">
                      <button className="addcart"><FaShoppingCart /> Add to cart</button>
                      <FaHeart />
                    </div>
                    <button className="viewcourse">View Course</button>
                  </div>
                </div>
              </div>
    </div>
    </>

    
  );
}

export default Courses;
