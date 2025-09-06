import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import MovieDetail from "./pages/MovieDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/account" element={<Account />} />

      </Routes>
         <Footer />
    </Router>
  );
};

export default App;
