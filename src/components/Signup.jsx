import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../firebase"; // Firebase signup function
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = ({ backgroundImage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(email, password);
      navigate("/"); // Redirect after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage || "/src/assets/films.png"})`, // <-- Your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* Signup Form */}
      <div
        className="p-5 rounded bg-dark text-white"
        style={{ zIndex: 1, width: "90%", maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Sign Up</h2>
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: "#ff1010", color: "#fff", border: "none" }}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-light">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
