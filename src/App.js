import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import Footer from "./pages/Footer";
import Menu from "../src/pages/Menu";
import About from "../src/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "../src/pages/ContactPage";
// import { ReactDOM } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
