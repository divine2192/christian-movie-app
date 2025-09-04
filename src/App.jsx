import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import MovieDetail from "./pages/MovieDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";


const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/account" element={<Account />} />

      </Routes>
    </Router>
  );
};

export default App;
