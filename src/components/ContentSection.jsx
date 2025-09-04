// src/components/ContentSection.js
import React from "react";
import './ContentSection.css';

const ContentSection = ({ title, movies }) => {
  return (
    <div className="contentSection">
      <h2>{title}</h2>
      <div className="contentSection__movies">
        {movies.map((movie, index) => (
          <div key={index} className="contentSection__movie">
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
