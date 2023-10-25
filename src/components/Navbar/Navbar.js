import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Icon from "@mdi/react";
import { mdiMagnify, mdiCloseThick, mdiAccountTie } from "@mdi/js";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import React from "react";
import { saveSearch } from "../../state/search";

export default function Navbar() {
  const [searchState, setSearchState] = useState(false); //Is Typing
  const [searchText, setSearchTextState] = useState(false); //Text from search
  const auth = getAuth();
  const navigate = useNavigate();
  const inputRef = React.useRef < HTMLInputElement > null;
  const dispatch = useDispatch();
  const variants = {
    open: { x: 0 },
    closed: { x: 50 },
    transition: { duration: 5 },
  };

  const handleTextChange = (value) => {
    setSearchTextState(value);
    dispatch(saveSearch(value));
    // document.getElementById("input-text-box").value =
    //If user is typing append url and navigate
    if (value.length > 0) {
      console.log("VAL", value);
      navigate(`/search?q=${value}`);
    }
    //When done go back home
    else {
      navigate("/");
    }
  };

  return (
    <nav>
      <ul>
        <div className="left">
          <a>
            <img src="../images/logo.png" alt="" />
          </a>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/tvseries">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/latest">New & Popular</Link>
          </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
        </div>
        <div id="navbar-right" className="right">
          <motion.li
            initial={{ x: 0 }}
            style={
              searchState === true ? { display: "flex" } : { display: "none" }
            }
            animate={searchState === true ? "open" : "closed"}
            variants={variants}
            className="search-input"
          >
            <Icon
              className="search-input-icon"
              path={mdiMagnify}
              color="white"
              size={1.2}
              onClick={() => console.log("clicked")}
            />
            <input
              id="input-text-box"
              onBlur={() => setSearchState(!searchState)}
              inputRef={inputRef}
              autoFocus
              type="text"
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Titles, people, genres"
            />
            <Icon
              style={
                searchText.length > 0
                  ? { display: "flex" }
                  : { display: "none" }
              }
              className="search-close-icon"
              path={mdiCloseThick}
              color="white"
              size={1.2}
              onClick={() => {
                handleTextChange("");
                //Clear text input after hitting button
                document.getElementById("input-text-box").value = "";
              }}
            />
          </motion.li>
          <li
            className="search-icon-container"
            style={
              searchState === false ? { display: "flex" } : { display: "none" }
            }
          >
            <Icon
              path={mdiMagnify}
              color="white"
              size={1.4}
              onClick={() => {
                setSearchState(!searchState);
                document.getElementById("input-text-box").focus();
                console.log("STATE : ", searchState);
              }}
            />
          </li>
          <div id="profile-id" class="dropdown">
            <span>
              <Icon
                path={mdiAccountTie}
                color="white"
                size={1.4}
                onClick={() => console.log("clicked")}
              />
            </span>
            <div class="dropdown-content">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    signOut(auth).then(() => {
                      navigate("/splash");
                    });
                  }}
                >
                  <Link to="/splash">Sign out</Link>
                </a>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
