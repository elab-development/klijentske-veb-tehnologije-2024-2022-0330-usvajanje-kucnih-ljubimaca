import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imagePath from './assets/logo.png';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Adopt from "./pages/Adopt";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery"
import Footer from "./components/Footer"

interface NavBarItem {
  name: string;
  path: string;
}

function App() {
  const items: NavBarItem[] = [
    { name: "pocetna", path: "/" },
    { name: "usvajanje", path: "/adopt" },
    { name: "galerija", path: "/gallery" },
    { name: "ulogujte se", path: "/login" },
    { name: "kontakt", path: "/contact" }
  ];

  return (
    <Router>
      <NavBar brandName="udomiMe" imageSrcPath={imagePath} navItems={items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;