import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/category"> Category </Link>
      <Link to="/checkout"> Checkout </Link>
      <Link to="/contact"> Contact </Link>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <p> This is Home Page </p>
    </>
  );
};

const Category = () => {
  return (
    <>
      <Navbar />
      <p> This is Category Page </p>
    </>
  );
};

const Checkout = () => {
  return (
    <>
      <Navbar />
      <p> This is Checkout Page </p>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <p> This is About Page </p>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <p> This is Contact Page </p>
      <Button />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
