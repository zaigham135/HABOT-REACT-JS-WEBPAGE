import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const SearchBar = () => {
  return (
    <div clasName="SearchBar">
      <div className="frontpage-content">
        <h2 className="frontpage-content-title">Are you a Supplier?</h2>
        <h2 className="frontpage-content-subtitle">
          Explore matching opportunities
        </h2>
        <div className="frontpage-content-search ">
          <div className="input-container ">
            <FaBriefcase className="input-icon" />
            <input
              type="text"
              placeholder="Search your required service here"
            />
          </div>
          <div className="input-container ">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              placeholder="Search your desired location here"
            />
          </div>
          <button className="">Search</button>
        </div>
        <div className="frontpage-content-buyer">
          <span className="frontpage-content-buyer-title">Are you a Buyer?</span>
          <span className="frontpage-content-buyer-text">
            Click here if you are looking to post a requirement
          </span>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
