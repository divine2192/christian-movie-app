import React, { useState, useEffect } from "react";
import { db } from "../firebase";  // ✅ Correct import
import { collection, getDocs } from "firebase/firestore";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);  // ✅ Added loading state

  // Fetch movies from Firestore when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const movieList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // ✅ Ensure valid mapping
        setMovies(movieList);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("An error occurred while fetching the movies.");
      } finally {
        setLoading(false);  // ✅ Set loading to false after fetching
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-5 bg-gray-900 text-white rounded-lg shadow-lg">
      {loading ? (  // ✅ Show loading message
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="mb-5">
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p className="mb-2">{movie.description}</p>
            {movie.imageURL && <img src={movie.imageURL} alt={movie.title} className="rounded-lg shadow-md" />}
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
