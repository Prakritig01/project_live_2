import React from "react";
import "./Footer.css";
import facebook from "../../assests/facebook.svg";
import instagram from "./../../assests/instagram 1.svg";
import twitter from "./../../assests/twitter 1.svg";
import youtube from "../../assests/youtube 1.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="text-content">
        <p>@ 2024 Explorin. All rights Reserved</p>
      </div>
      <div className="social-media">
        <img src={facebook} alt="" className="images" />
        <img src={youtube} alt="" className="images" />
        <img src={instagram} alt="" className="images" />
        <img src={twitter} alt="" className="images" />
      </div>
    </div>
  );
};

export default Footer;
