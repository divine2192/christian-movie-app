

const MovieCard = ({ movie }) => (
  <div className={styles.movieCard}>
    <iframe
      className={styles.video}
      src={`https://www.youtube.com/embed/${movie.youtubeId}`}
      title={movie.title}
      allowFullScreen
    ></iframe>
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
  </div>
);

export default MovieCard;
