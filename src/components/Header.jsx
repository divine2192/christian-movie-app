import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // <-- added state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#111" }}>
      <div className="container-fluid">
        {/* Logo */}
        <img
          src="src\assets\7 (6).png" // place your logo in public/logo.png
          alt="FaithFlix Logo"
          className="h-8"
        />

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FaBars className="text-white" />
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search" onClick={() => setIsOpen(false)}>
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library" onClick={() => setIsOpen(false)}>
                Library
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/account" onClick={() => setIsOpen(false)}>
                    Welcome, {user.displayName || "User"}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-warning" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
