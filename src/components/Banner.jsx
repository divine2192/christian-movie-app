import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner position-relative">
      <div className="banner__contents">
        <h1 className="banner__title">Welcome to FaithFlix</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;


