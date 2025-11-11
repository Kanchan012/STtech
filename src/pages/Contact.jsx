import React from "react";
import "../pages/Contact.css";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import map from "../assets/Homeimage/map.png";
import { IoMdSend } from "react-icons/io";
function Contact() {
  return (
    <>
      <div className="contactpage">
        <h1>Contact Us</h1>
      </div>

      <div className="cp">
        <div className="cp1">
          <MdCall className="con" />
          <p>
            <b>Phone Number</b>
          </p>
          <p>+977 9800000000</p>
          <p>+977 9810000000</p>
        </div>
        <div className="cp1">
          <IoIosMail className="con" />
          <p>
            <b>Email</b>
          </p>
          <p>example@gmail.com</p>
        </div>
        <div className="cp1">
          <FaLocationDot className="con" />
          <p>
            <b>Location</b>
          </p>
          <p>Street name</p>
          <p>Kathmandu</p>
        </div>
      </div>

      <div className="map">
        <div >
            <img src={map} className="mapimg"/>
        </div>
        <div className="mapform">
            <form>
                <legend>Send us a message</legend> <br />
                <div className="mapin">
                    <div>
                         <input type="text" placeholder="Your Full Name" /><br/>
                    </div>
                    <div>
                            <input type="email" placeholder="Your Email" /><br/>
                    </div>
                </div>
               
                 <div className="mapin">
                    <div>
                         <input type="phone" placeholder="Phone Number" /><br/>
                    </div>
                    <div>
                            <input type="text" placeholder="Subject" /><br/>
                    </div>
                </div>

                <textarea placeholder="Message" ></textarea><br/>
                <button>Send Message <IoMdSend className="send" /></button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
