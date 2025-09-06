import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaShareAlt, 
  FaThumbsUp, 
  FaThumbsDown, 
  FaCalendarAlt, 
  FaClock, 
  FaFilm  } from "react-icons/fa";

// Example movie data
const movies = [
  {
    id: "4Aif1qEB_JU",
    title: "The Passion of the Christ",
    year: 2004,
    duration: "2h 7m",
    genre: "Drama, Biblical",
    description: "A powerful depiction of the last twelve hours in the life of Jesus of Nazareth.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzMxY2Y4MzktMGNkNC00ODFjLWI3MGMtMzM2M2ExNmQxMGFmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: "GHekdrK8pK8",
    title: "Jesus of Nazareth",
    year: 1977,
    duration: "6h 22m",
    genre: "Drama, Biblical",
    description: "An epic miniseries covering the birth, ministry, death, and resurrection of Jesus Christ.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjU2NTVhYmItNGY5Yi00MGFkLTg2ZTctMDQ2MGQyZGI1MzBmXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: "bMjo5f9eiX8",
    title: "God's Not Dead",
    year: 2014,
    duration: "1h 53m",
    genre: "Drama",
    description: "A college student faces challenges from his philosophy professor who denies the existence of God.",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/God%27s_Not_Dead.jpg"
  },
  {
    id: "47OkuvT5JFo",
    title: "The Gospel of John",
    year: 2003,
    duration: "2h 10m",
    genre: "Biblical, Drama",
    description: "A faithful depiction of the Gospel of John, covering the life and teachings of Jesus Christ.",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Gospel_of_John.jpg/220px-The_Gospel_of_John.jpg"
  },
  {
    id: "04WXlAcOtS0",
    title: "The Pilgrim's Progress",
    year: 2019,
    duration: "1h 49m",
    genre: "Animation, Adventure",
    description: "An animated retelling of the classic allegorical novel about the journey of Christian to the Celestial City.",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/The_Pilgrim%27s_Progress_poster.jpg"
  },
  {
    id: "rHEEI4jzBz0",
    title: "The Case for Christ",
    year: 2017,
    duration: "1h 49m",
    genre: "Drama, Biography",
    description: "A journalist sets out to disprove Christianity but discovers compelling evidence for faith.",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Case_for_Christ_poster.jpg"
  },
  {
    id: "mydh4MEo2B0",
    title: "Heaven is for Real",
    year: 2014,
    duration: "1h 40m",
    genre: "Drama, Family",
    description: "A young boy claims to have visited heaven during a near-death experience, impacting his family and town.",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/b8/Heavenisforrealtheaterposter.jpg"
  },
  {
    id: "8cOKwX1hz-w",
    title: "Courageous",
    year: 2011,
    duration: "2h 10m",
    genre: "Drama, Family",
    description: "Four police officers face personal struggles and discover the importance of fatherhood and integrity.",
    poster: "https://m.media-amazon.com/images/M/MV5BYWFhNTM5NDItZjkwOC00MzFmLTk1OTktN2FlMzY5ZDdmYzE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  if (!movie) return <h2 className="text-center my-5">Movie not found</h2>;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  const suggested = movies.filter((m) => m.id !== id);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px) brightness(0.5)",
          zIndex: 0,
        }}
      ></div>

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "40px 20px" }}>
        <div className="row">
          {/* Video */}
          <div className="col-lg-7 mb-3">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${movie.id}`}
              allowFullScreen
              title={movie.title}
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>

          {/* Details */}
          <div className="col-lg-5 d-flex flex-column">
            <h2>{movie.title}</h2>
            <p><FaCalendarAlt className="me-2" /><strong> Year:</strong> {movie.year}</p>
            <p><FaClock className="me-2" /><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Description: </strong>{movie.description}</p>

            {/* Action Buttons */}
            <div className="d-flex gap-2 my-3 flex-wrap">
              <button className="" onClick={() => setLikes(likes + 1)}>
                <FaThumbsUp className="me-1" /> {likes}
              </button>
              <button className="" onClick={() => setDislikes(dislikes + 1)}>
                <FaThumbsDown className="me-1" /> {dislikes}
              </button>
              <button className="" onClick={handleShare}>
                <FaShareAlt className="me-1" /> Share
              </button>
            </div>

            {/* Comments */}
            <div className="mt-3">
              <h5>Comments</h5>
              <div className="d-flex gap-2 mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button style={{ backgroundColor: "#ff1010", color: "#fff", border: "none" }} onClick={handleAddComment}>
                  Post
                </button>
              </div>
              <ul className="list-group">
                {comments.map((c, i) => (
                  <li key={i} className="list-group-item">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Suggested Videos Horizontal Carousel */}
        <div className="mt-5">
          <h4>Titles You Might Like </h4>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              padding: "10px 0",
            }}
          >
            {suggested.map((m) => (
              <Link
                key={m.id}
                to={`/movie/${m.id}`}
                style={{
                  minWidth: "180px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div className="card shadow" style={{ borderRadius: "8px" }}>
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="card-body p-2">
                    <p className="card-title text-center mb-0">{m.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
