import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "./NavBar_mobile.css";
import searchIcon from "./search.svg";
import profilePic from "./profilePic.svg";

const NavBar = ({ FetchMovie }) => {
  const [movieTitle, setMovieTitle] = useState("Avengers");

  return (
    <div className="NavBar">
      <h1 className="logo">MovieHub</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter the movie name"
          onChange={(e) => setMovieTitle(e.target.value)}
          value={movieTitle}
        />
        <Link to="/">
          <img
            className="searchIcon"
            src={searchIcon}
            alt="search"
            onClick={() => FetchMovie(movieTitle)}
          />
        </Link>
      </div>

      <div className="profileImg">
        <img src={profilePic} alt="account" />
      </div>
    </div>
  );
};

export default NavBar;
