import { useState, useEffect } from "react";
import auth, { logoutUser } from "../firebase";
import Signup from "./Signup";
import Login from "./Login";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // for mobile menu toggle

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      console.log("Error logging out:", err);
    }
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  return (
    <nav className="bg-black text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">FaithFlix</div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 w-full lg:w-auto mt-3 lg:mt-0 ${
            isOpen ? "block" : "hidden lg:flex"
          } text-center`}
        >
          {user ? (
            <>
              <span className="text-sm mb-2 lg:mb-0">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mb-2 lg:mb-0"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={toggleLogin}
                className="bg-yellow-400 text-black px-4 py-1 rounded-md font-semibold hover:bg-yellow-500 mb-2 lg:mb-0"
              >
                Sign In
              </button>
              <button
                onClick={toggleSignup}
                className="bg-yellow-400 text-black px-4 py-1 rounded-md font-semibold hover:bg-yellow-500 mb-2 lg:mb-0"
              >
                Sign Up Free
              </button>

              {/* Forms */}
              {showLogin && <Login setUser={setUser} />}
              {showSignup && <Signup />}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
