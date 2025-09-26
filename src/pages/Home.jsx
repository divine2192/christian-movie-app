import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const movies = [
  {
    title: "The Passion of the Christ",
    poster: "https://m.media-amazon.com/images/M/MV5BNzMxY2Y4MzktMGNkNC00ODFjLWI3MGMtMzM2M2ExNmQxMGFmXkEyXkFqcGc@._V1_.jpg",
    id: "4Aif1qEB_JU", // YouTube video ID
  },
  {
    title: "Jesus of Nazareth",
    poster: "https://m.media-amazon.com/images/M/MV5BMjU2NTVhYmItNGY5Yi00MGFkLTg2ZTctMDQ2MGQyZGI1MzBmXkEyXkFqcGc@._V1_.jpg",
    id: "GHekdrK8pK8",
  },
  {
    title: "God's Not Dead",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/God%27s_Not_Dead.jpg",
    id: "bMjo5f9eiX8",
    year: 2004,
    duration: "2h 7m",
    genre: "Drama, Biblical",
    description: "A powerful depiction of the last twelve hours in the life of Jesus of Nazareth.",
  },
  {
    title: "The Gospel of John",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Gospel_of_John.jpg/220px-The_Gospel_of_John.jpg",
    id: "47OkuvT5JFo",
  },
  {
    title: "The Pilgrim's Progress",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/The_Pilgrim%27s_Progress_poster.jpg",
    id: "04WXlAcOtS0",
  },
  {
    title: "The Case for Christ",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Case_for_Christ_poster.jpg",
    id: "rHEEI4jzBz0",
  },
  {
    title: "Heaven is for Real",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b8/Heavenisforrealtheaterposter.jpg",
    id: "mydh4MEo2B0",
  },
  {
    title: "Courageous",
    poster: "https://m.media-amazon.com/images/M/MV5BYWFhNTM5NDItZjkwOC00MzFmLTk1OTktN2FlMzY5ZDdmYzE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    id: "8cOKwX1hz-w",
  },
];

const Home = () => {
  return (
    <div>
      <Banner />
    <div className="container my-5">
      <h3 className="text-center mb-4">
        <FontAwesomeIcon icon={faFilm} className="me-2" /> Featured Movies
      </h3>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card bg-dark text-white h-100 shadow movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.poster}
                  alt={`${movie.title} Poster`}
                  className="card-img-top movie-poster"
                />
              </Link>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-center flex-grow-1">
                  {movie.title}
                </h6>
                <Link
                  to={`/movie/${movie.id}`}
                  className="btn mt-2 fw-semibold"
                  style={{ backgroundColor: "#ff1010", color: "#fff", border: "none" }}
                >
                  Watch Now 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Home;
