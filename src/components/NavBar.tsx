import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Definišemo tip za navigacione stavke
interface NavBarItem {
  name: string;
  path: string;
}

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: NavBarItem[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <nav className="navbar navbar-expand-md navbar-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-3.7">{brandName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-start flex-column flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {navItems.map((item, index) => (
              <li
                key={item.name} // item.name je jedinstven ključ za svaku stavku
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <Link
                  className={
                    selectedIndex === index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  to={item.path} // item.path koristi putanju iz objekta
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;