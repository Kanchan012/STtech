import React from "react";
import "./Dashboard.css";
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
import { LuBookOpenText } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { IoMdTrophy } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dash">
          <ul>
            <li className="d1">
              <MdOutlineDashboard />
              Dashboard
            </li>
            <li>
              <NavLink to="/myprofile" className="p">
                <CgProfile />
                My Profile
              </NavLink>
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
            </li>{" "}
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

        <div className="dashed">
          <div className="dash1">
            <div className="dh">
              <h2>Dashboard</h2>
            </div>
            <div className="not">
              <MdNotificationsNone size={25} />
              <b>Riva Shakya</b>
              <img src={Riva} alt="riva" width={"33px"} height={"33px"} />
            </div>
          </div>

          <div className="welcome">
            <img src={welcomeback} alt="welcome" />
          </div>

          <div className="trophy">
            <div className="trophy1">
              <LuBookOpenText className="trophyicon" />
              <h3>1</h3>
              <p>Enrolled Courses</p>
            </div>

            <div className="trophy1">
              <GiGraduateCap className="trophyicon" />
              <h3>1</h3>
              <p>Active Courses</p>
            </div>

            <div className="trophy1">
              <IoMdTrophy className="trophyicon" />
              <h3>1</h3>
              <p>Completed Courses</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
