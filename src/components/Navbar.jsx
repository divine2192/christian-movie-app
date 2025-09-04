import { useState, useEffect } from "react";
import auth, { logoutUser } from "../firebase";
import Signup from "./Signup";
import Login from "./Login";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);  // Track if we show Login
  const [showSignup, setShowSignup] = useState(false);  // Track if we show Signup

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
    setShowSignup(false); // Hide SignUp if Login is shown
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false); // Hide Login if SignUp is shown
  };

  return (
    <nav className="flex items-center justify-between bg-black text-white py-3 px-6">
     

      <div className="flex items-center space-x-6">
     

        {user ? (
          <>
            <span className="text-sm">Welcome, {user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleLogin}
              className="bg-yellow-400 text-black px-4 py-1 rounded-md font-semibold hover:bg-yellow-500"
            >
              Sign In
            </button>
            <button
              onClick={toggleSignup}
              className="bg-yellow-400 text-black px-4 py-1 rounded-md font-semibold hover:bg-yellow-500"
            >
              Sign Up Free
            </button>

            {/* Show Login form if "Sign In" button clicked */}
            {showLogin && <Login setUser={setUser} />}
            {/* Show SignUp form if "Sign Up" button clicked */}
            {showSignup && <Signup />}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
