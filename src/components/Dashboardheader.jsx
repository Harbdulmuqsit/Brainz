import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineSearch } from "react-icons/ai";
import gifted from "../../src/img/Gifted-Brainz.png";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboardheader = () => {
  const handleHamburgerMenu = () => {
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");
    sidebar.classList.toggle("hide");
    content.classList.toggle("noSideBar");
  };

  return (
    <nav>
      <GiHamburgerMenu id="shoveIn" onClick={handleHamburgerMenu} />
      <form action="#">
        <div className="form-input">
          {/*
          <input type="search" placeholder="Search..." />
          <button type="submit" class="search-btn">
            <AiOutlineSearch />
          </button>
           */}
        </div>
      </form>

      <Link to="#" className="profile">
        <img src={gifted} alt="profieImage" />
      </Link>

      {/*   <Link to="#" class="profile">
        <img src={gifted} alt="profileImage" />
      </Link> 
    */}
    </nav>
  );
};

export default Dashboardheader;
