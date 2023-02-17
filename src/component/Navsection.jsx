import React from "react";
import "../styles/navsection.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Navsection = () => {
  return (
    <div>
      <nav className="nav-container">
        <div id="lg">W</div>
        <div id="txt1">WASSERSTOFF</div>
        <div id="input">
          <SearchIcon id="search" />
        </div>
        <ul>
          <li>Statistics</li>
          <li>Overview</li>
          <li>Dashboard</li>
          <li>Analytics</li>
        </ul>
        <PersonOutlineOutlinedIcon id="person" />
      </nav>
    </div>
  );
};

export default Navsection;
