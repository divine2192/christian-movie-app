import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer
      className="text-white mt-5"
      style={{
        backgroundColor: "#111",
        padding: "20px 10px",
        width: "100%",
      }}
    >
      <div className="container text-center">
        <p className="copyright">© 2025 Faith Flix. All rights reserved.</p>

        {/* Hamburger for small screens */}
        <div className="d-lg-none mb-2" >
          <button
            className="btn btn-outline-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars /> Menu
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`d-lg-flex justify-content-center gap-3 mb-3 ${isOpen ? "d-block" : "d-none d-lg-flex"}`}
        >
          <a href="/" className="text-white text-decoration-none">Home</a>
          <a href="/about" className="text-white text-decoration-none">About</a>
          <a href="/contact" className="text-white text-decoration-none">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="d-flex justify-content-center gap-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
