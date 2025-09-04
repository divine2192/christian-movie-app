import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <div className="position-relative text-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Dark Effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Banner Content */}
      <div className="container position-relative d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="display-4 fw-bold">Go ahead, stream free</h1>
        <p className="lead w-75">
          With FaithFlix, you can watch over 20,000 free Christian movies and shows. What are you waiting for?
        </p>
        <button a href="/signup" className="btn btn-warning btn-lg mt-3">Get Started for Free</button>
      </div>
    </div>
  );
};

export default Banner;


