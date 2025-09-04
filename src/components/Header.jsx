import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">
          FaithFlix 🎬
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library">
                Library
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
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
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-warning" to="/signup">
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
