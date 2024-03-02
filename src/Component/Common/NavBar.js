import React, { Component } from "react";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="Home">
            Company
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav ms-auto mt-3 mn-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="Home">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="AboutUs">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ContactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
