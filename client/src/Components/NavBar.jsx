import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(!checked);
  };

  return (
    <div className="menu-container">
      <input
        onChange={checkHandler}
        type="checkbox"
        checked={checked}
        className="toggler"
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul className="nav-container">
              <li>
                <Link onClick={checkHandler} className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={checkHandler} className="nav-link" to="/about">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={checkHandler}
                  className="nav-link"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={checkHandler} className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
