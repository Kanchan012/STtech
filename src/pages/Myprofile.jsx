import React from "react";
import "./Myprofile.css";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { PiVideoBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../assets/Homeimage/Riva.png";
import welcomeback from "../assets/Homeimage/welcomeback.png";
function Myprofile() {
  return (
    <>
      <div className="dashboard">
        <div className="dash">
          <ul>
            <li >
              <MdOutlineDashboard />
              Dashboard
            </li>
            <li className="p1">
                <CgProfile />
                My Profile
            </li>
            <li>
              <FaGraduationCap />
              My Courses
            </li>
            <li>
              <IoDocumentText />
              Tasks
            </li>
            <li>
              <PiVideoBold />
              Course videos
            </li>
            <li>
              <FaRegHeart />
              Wishlist
            </li>
            <li>
              <LuNotebookPen />
              Feedback
            </li>
            <li>
              <LuMessageSquareMore />
              Messages
            </li>
            <br />
            <hr width={"160px"} /> <br />
            <li>
              <IoMdSettings />
              Settings
            </li>
            <li>
              <FiLogIn />
              Logout
            </li>
          </ul>
        </div>

        <div className="portray">
        <div className="pro1">
          <div className="pf">
            <h2>My Profile</h2>
          </div>
          <div className="pf1">
            <MdNotificationsNone size={25} />
            <b>Riva Shakya</b>
            <img src={Riva} alt="riva" width={"33px"} height={"33px"} />
          </div>
        </div>

      <div className="changepp">
        <img src={Riva} alt="riva" width={"33px"} height={"33px"} />  <br />
        <button>Change Profile Picture</button>
      </div>
      <div className="port">
        <img src={welcomeback} alt="welcomeback" />
      </div>
        
       <div className="bio">
        <div className="biodata1">
            <p>Registration Date</p>
            <b>1/2/2025     4:30 pm</b>
        </div>
        <div className="biodata2">
            <p>First Name</p>
            <b>Example</b>
        </div>
        <div className="biodata3">
            <p>Last Name</p>
            <b>Example</b>
        </div>
        <div className="biodata4">
            <p>Username</p>
            <b>Example</b>
        </div>
        <div className="biodata5">
            <p>Location</p>
            <b>Example</b>
        </div>
        <div className="biodata6">
            <p>Email</p>
            <b>Example</b>
        </div>
        <div className="biodata7">
            <p>Contact Number</p>
            <b>Example</b>
        </div>
        <div className="biodata8">
            <p>Skill/Occupation</p>
            <b>-</b>
        </div>
        <div className="biodata9">
            <p>Biography</p>
            <b>-</b>
        </div>
       </div>
        </div>
      </div>
    </>
  );
}

export default Myprofile;
