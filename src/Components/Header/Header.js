import React from "react";
import "./Header.css";
import bellRing from "./../../assests/BellRinging (1).png";
import ellipse from "./../../assests/Ellipse 18.png";
import briefCase from "./../../assests/briefcase 1.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="heading">
        <img src={briefCase} alt="" srcset="" className="brief-case" />
        <p>Explorin Solutions</p>
      </div>
      <div className="navigation">

        <div className="saved-jobs">
          <button className="btn"> </button>
          <p>My Saved Jobs only</p>
        </div>

        <div className="images-div">
          <img src={bellRing} alt="" srcset="" className="bellRing" />
          <img src={ellipse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
