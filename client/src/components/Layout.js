import React from "react";
import "../styles/LayoutStyles.css";
import { Link } from "react-router-dom";
import Home from "../images/Home.png";
import ServiceBadge from "./ServiceBadge";
import service4 from "../images/service (4).png";
import service3 from "../images/service (3).png";
import service2 from "../images/service (2).png";
import service1 from "../images/service (1).png";
//import Logo from "../images/Logo.png";
//import MyHealth from "../images/MyHealth.png";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="content">
          <div className="body">{children}</div>

          <div className="layout-container">
            <div className="layout">
              {/* Nav bar */}
              <div className="topbar">
                
                <h1 className="LogoText">My Health</h1>

                <div className="Nav ">Home</div>
                <div className="Nav ">Services</div>
                <div className="Nav ">Features</div>
                <div className="Nav ">Contact</div>
                <div className="Nav ">About Us</div>
                <div className="Nav "></div>
                <div className="button ">
                  <Link to="welcome">
                    <button className="btn-primary" type="submit">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
              <div className="poster">
                <h1 className="poster-text">
                  Meet the right Doctor and Get the Best Care!
                </h1>
              </div>
              <img className="homeImg" src={Home} alt="no internet" />

              <div className="serviceTop">
                <h1>Top Speciality</h1>
              </div>

              {/* services abdges */}
              <div className="serviceArea">
                <ServiceBadge url={service4} title="Skin" />
                <ServiceBadge url={service3} title="Eye" />
                <ServiceBadge url={service2} title="Densitry" />
                <ServiceBadge url={service1} title="ENT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
