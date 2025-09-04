import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
        title="Movie Player"
      ></iframe>
    </div>
  );
};

export default MovieDetail;
