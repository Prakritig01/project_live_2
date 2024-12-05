import React from "react";
import "./Footer.css";
import facebook from "./../../assests/Vector.png";
import instagram from "./../../assests/instagram 1.png";
import twitter from "./../../assests/Vector (1).png";
import youtube_outer from "./../../assests/youtube2.png";
import youtube_inner from "./../../assests/youtube.png";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="text-content">
            <p>@ 2024 Explorin. All rights Rserved</p>
        </div>
      <div className="social-media">
        <img src={facebook} alt="" className="images" />
        <div className="youtube">
          <img src={youtube_outer} alt=""  className="images"/>
          <img src={youtube_inner} alt=""  className="images" />
        </div>
        <img src={instagram} alt=""   className="images"/>
        <img src={twitter} alt=""  className="images"/>
      </div>
    </div>
  );
};

export default Footer;
