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

import About1 from './pages/LearnMore/AboutBeni';
import About2 from './pages/LearnMore/AboutDzeki';
import About3 from './pages/LearnMore/AboutCici';
import About4 from './pages/LearnMore/AboutBela';
import About5 from './pages/LearnMore/AboutBendzamin';
import About6 from './pages/LearnMore/AboutCupko';
import About7 from './pages/LearnMore/AboutPipi';

interface NavBarItem {
  name: string;
  path: string;
}

function App() {
  const items: NavBarItem[] = [
    { name: "pocetna", path: "/" },
    { name: "usvajanje", path: "/adopt" },
    { name: "galerija", path: "/gallery" },
    { name: "posaljite upit", path: "/login" },
    { name: "kontakt", path: "/contact" }
  ];

  //prvi routes je za navbar, drugi je za detaljniji opis svakog ljubimca
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
      <Routes>
        <Route path="/about1" element={<About1 />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route path="/about4" element={<About4 />} />
        <Route path="/about5" element={<About5 />} />
        <Route path="/about6" element={<About6 />} />
        <Route path="/about7" element={<About7 />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;