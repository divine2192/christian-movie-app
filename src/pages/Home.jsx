import React from "react";

const movies = [
  {
    title: "The Passion of the Christ",
    poster: "https://m.media-amazon.com/images/M/MV5BNzMxY2Y4MzktMGNkNC00ODFjLWI3MGMtMzM2M2ExNmQxMGFmXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=4Aif1qEB_JU",
  },
  {
    title: "Jesus of Nazareth",
    poster: "https://m.media-amazon.com/images/M/MV5BMjU2NTVhYmItNGY5Yi00MGFkLTg2ZTctMDQ2MGQyZGI1MzBmXkEyXkFqcGc@._V1_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GHekdrK8pK8",
  },
  {
    title: "God's Not Dead",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/God%27s_Not_Dead.jpg",
    videoUrl: "https://www.youtube.com/watch?v=bMjo5f9eiX8",
  },
  {
    title: "The Gospel of John",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Gospel_of_John.jpg/220px-The_Gospel_of_John.jpg",
    videoUrl: "https://www.youtube.com/watch?v=47OkuvT5JFo",
  },
  {
    title: "The Pilgrim's Progress",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/The_Pilgrim%27s_Progress_poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=04WXlAcOtS0",
  },
  {
    title: "The Case for Christ",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Case_for_Christ_poster.jpg",
    videoUrl: "https://www.youtube.com/watch?v=rHEEI4jzBz0",
  },
  {
    title: "Heaven is for Real",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b8/Heavenisforrealtheaterposter.jpg",
    videoUrl: "https://www.youtube.com/watch?v=mydh4MEo2B0",
  },
  {
    title: "Courageous",
    poster: "https://m.media-amazon.com/images/M/MV5BYWFhNTM5NDItZjkwOC00MzFmLTk1OTktN2FlMzY5ZDdmYzE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8cOKwX1hz-w",
  },
];

const Home = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-warning fw-bold mb-4">
        🎬 Latest Christian Movies
      </h1>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card bg-dark text-white h-100 shadow movie-card">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="card-img-top movie-poster"
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-center flex-grow-1">
                  {movie.title}
                </h6>
                <a
                  href={movie.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${movie.title}`}
                  className="btn btn-warning mt-2 fw-semibold"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

