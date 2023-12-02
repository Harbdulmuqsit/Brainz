import React, { useState } from "react";
// import { UseState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";

import logo from "../../src/img/Gifted-Brainz.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  function show() {
    const discuss = document.querySelector(".discussion-content");
    discuss.classList.toggle("show");
  }

  return (
    <div className="nav-bar">
      <Link to="#">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={show}>
          <Link to="#">Home</Link>
        </li>

        <li>
          <Link to="#">Features & Benefits</Link>
        </li>
        <li>
          <Link to="#">Courses</Link>
        </li>
        <li>
          <Link to="#">Future road map</Link>
        </li>
        <li>
          <Link to="/dashboard" >
            Dashboard
          </Link>
        </li>
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaRegTimesCircle className="icon" />
        ) : (
          <HiOutlineMenuAlt4 className="icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
