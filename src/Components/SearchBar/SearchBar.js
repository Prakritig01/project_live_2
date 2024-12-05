import React from "react";
import "./SearchBar.css";
import target from "../../assests/target.svg";
import search from '../../assests/search_icon.svg';
import map from '../../assests/MapPin.svg';
const SearchBar = () => {
  return (
    <div className="Search-bar">
      <div className="search-job">
        <img src= {search} alt="" className="icon" />
        <input
          type="text"
          placeholder="Search by: Job tittle, Position,Keyword..."
        />
      </div>
      <div className="devider"></div>
      <div className="search-city">
        <img src= {map} alt="" className="icon" />
        <input type="text" name="" id="" placeholder="City, state or country" />
      </div>

      <div className="extras">
      <img src={target} alt="" className="target" />
      <button className="find-job-btn">Find Job</button>
      </div>
     
    </div>
  );
};

export default SearchBar;
