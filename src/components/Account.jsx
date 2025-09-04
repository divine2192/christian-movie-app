import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Account = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const storage = getStorage();

  const [newDisplayName, setNewDisplayName] = useState(user.displayName || "");
  const [file, setFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(user.photoURL || "");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  // Handle name change
  const handleNameChange = async () => {
    if (newDisplayName !== user.displayName) {
      try {
        await updateProfile(user, { displayName: newDisplayName });
        alert("Name updated successfully!");
      } catch (error) {
        console.error("Error updating name:", error);
      }
    }
  };

  // Handle picture upload
  const handlePictureUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `profile_pictures/${user.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress (optional)
        },
        (error) => {
          console.error("Error uploading picture:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(user, { photoURL: downloadURL }).then(() => {
              setProfilePicture(downloadURL);
              alert("Profile picture updated successfully!");
            });
          });
        }
      );
    }
  };

  // Handle adding a favorite movie
  const handleAddMovie = () => {
    if (movieInput.trim()) {
      setFavoriteMovies((prevMovies) => [...prevMovies, movieInput.trim()]);
      setMovieInput(""); // Clear input after adding
    }
  };

  // Handle removing a favorite movie
  const handleRemoveMovie = (movie) => {
    setFavoriteMovies(favoriteMovies.filter((favMovie) => favMovie !== movie));
  };

  return (
    <div className="container mt-5">
      <h2>Account Page</h2>

      {user ? (
        <div>
          {/* Display Name Section */}
          <div className="mb-3">
            <label htmlFor="displayName" className="form-label">
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              className="form-control"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
            />
            <button className="btn btn-outline-primary mt-2" onClick={handleNameChange}>
              Update Name
            </button>
          </div>

          {/* Profile Picture Upload */}
          <div className="mb-3">
            <label htmlFor="profilePicture" className="form-label">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn btn-outline-primary mt-2" onClick={handlePictureUpload}>
              Upload Picture
            </button>
            {profilePicture && (
              <div className="mt-3">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="img-fluid"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>
            )}
          </div>

          {/* Favorite Movies List */}
          <div className="mb-3">
            <label htmlFor="favoriteMovies" className="form-label">
              Favorite Movies
            </label>
            <input
              type="text"
              id="favoriteMovies"
              className="form-control"
              value={movieInput}
              onChange={(e) => setMovieInput(e.target.value)}
            />
            <button className="btn btn-outline-primary mt-2" onClick={handleAddMovie}>
              Add to Favorites
            </button>
          </div>

          <ul className="list-group">
            {favoriteMovies.map((movie, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {movie}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemoveMovie(movie)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view and edit your account details.</p>
      )}
    </div>
  );
};

export default Account;
