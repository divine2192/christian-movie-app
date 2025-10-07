import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter basename="/christian-movie-app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
