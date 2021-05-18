// import react

import React from "react";
// import { NavLink } from "react-router-dom";

// styling

// function for component
function Header() {
  return (
    <nav>
      <nav class="navbar flex navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand logo" href="/">
            <h4>Stephen Wright</h4>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <div class="navbar-nav ml-auto mt-2 mt-lg-0">
              <a class="nav-link active" href="/">
                Home <span class="sr-only"></span>
              </a>
              <a class="nav-link" href="portfolio">
                Portfolio
              </a>
              <a class="nav-link" href="contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink> */}
    </nav>
  );
}

// export component

export default Header;
