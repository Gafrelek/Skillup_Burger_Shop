import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const navs = [
    { name: "Login", path: "/login" },
    { name: "Orders", path: "/myorders" },
    { name: "Logout", path: "/login" },
  ];

  return (
    <div>
      <nav className="navbar shadow-0">
        <div className="container">
          <div className="btn-group">
            <button type="button" className="button" onClick={toggleDropdown}>
              Menu
            </button>
            <ul
              className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              onMouseLeave={closeDropdown}>
              {navs.map((d, i) => (
                <li key={i}>
                  <Link
                    to={d.path}
                    className="dropdown-item"
                    onClick={closeDropdown}>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;
