import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../firebase"; // Import Firebase login function
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Use Link instead of <a>

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Store errors
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await loginUser(email, password);
      console.log("Login Successful");
      navigate("/"); // Redirect to homepage after login
    } catch (err) {
      setError("Invalid email or password. Please try again."); // Show error message
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="p-5 rounded bg-secondary">
        <h2 className="mb-4 text-center">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>} {/* Show error */}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup" className="text-light">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
