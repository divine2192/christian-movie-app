import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../firebase";
import { FaSignInAlt, FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 const handleResetPassword = async () => {
    if (!email) return setError("Enter your email to reset password");
    try {
      await resetPassword(email);
      alert("Password reset email sent!");
    } catch {
      setError("Error sending password reset email");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await loginUser(email, password);
      setUser && setUser(userCredential.user);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('src/assets/films.png')", // <-- Your background image
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

      {/* Login Form */}
      <div
        className="p-5 rounded bg-dark text-white"
        style={{ zIndex: 1, width: "90%", maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">
           Login
        </h2>
        {error && <p className="text-danger text-center">{error}</p>}

<form onSubmit={handleLogin}>
  {/* Email Field */}
  <div className="mb-3 position-relative">
    <FaEnvelope
      className="position-absolute"
      style={{ left: "12px", top: "50%", transform: "translateY(-50%)", color: "#999" }}
    />
    <input
      type="email"
      className="form-control ps-5" // extra padding-left for the icon
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required
    />
  </div>

  {/* Password Field */}
  <div className="mb-3 position-relative">
    <FaLock
      className="position-absolute"
      style={{ left: "12px", top: "50%", transform: "translateY(-50%)", color: "#999" }}
    />
    <input
      type="password"
      className="form-control ps-5"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      required
    />
  </div>
  <div className="text-end mb-3">
            <button type="button" className="btn btn-link text-light p-0" onClick={handleResetPassword}>
              Forgot password?
            </button>
          </div>
  <button
    type="submit"
    className="btn w-100 d-flex align-items-center justify-content-center"
    style={{ backgroundColor: "#ff1010", color: "#fff", border: "none" }}
  >
    Login
  </button>
</form>



        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-light">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
