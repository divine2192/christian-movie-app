import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ backgroundImage }) => {
  return (
    <div
      className="position-relative text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage || "src/assets/films.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      {/* Overlay for Dark Effect */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
        style={{ zIndex: 0 }}
      ></div>

      {/* Banner Content */}
      <div
        className="container position-relative d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "60vh", padding: "2rem", zIndex: 1 }}
      >
        <h1
          className="fw-bold display-4 mb-3"
          style={{ fontSize: "2rem" /* mobile default */ }}
        >
          Go ahead, stream free
        </h1>
        <p
          className="lead w-100 w-md-75 mb-3"
          style={{ fontSize: "1rem" }}
        >
          With FaithFlix, you can watch over 20,000 free Christian movies and shows. What are you waiting for?
        </p>
        <a href="/signup" className="btn btn-dark btn-lg mt-3 px-4 py-2">
          Get Started for Free
        </a>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 1200px) {
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;

