import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../firebase"; // Import Firebase signup function
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Use Link instead of <a>

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Store errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await registerUser(email, password);
      console.log("Signup Successful");
      navigate("/"); // Redirect to homepage after signup
    } catch (err) {
      setError(err.message); // Display error if signup fails
    }
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle bg-dark text-white p-5 rounded" style={{ zIndex: 10, width: '90%', maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Sign Up</h2>
      {error && <p className="text-danger text-center">{error}</p>} {/* Show error */}
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
        <button type="submit" className="btn btn-warning w-100">
          Sign Up
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account?  <Link to="/login" className="text-light">Login</Link> 
      </p>
    </div>
  );
};

export default Signup;
