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

interface NavBarItem {
  name: string;
  path: string;
}

function App() {
  const items: NavBarItem[] = [
    { name: "Pocetna", path: "/" },
    { name: "Ulogujte se", path: "/login" },
    { name: "Usvajanje", path: "/adopt" },
    { name: "Kontakt", path: "/contact" }
  ];

  return (
    <Router>
      <NavBar brandName="UdomiMe" imageSrcPath={imagePath} navItems={items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;