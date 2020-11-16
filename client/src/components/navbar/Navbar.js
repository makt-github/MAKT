import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark  fixed-top">
      <a className="navbar-brand text-white text-uppercase" href="#">
        MAKT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/home">
              Home&nbsp; <i class="fas fa-home"></i>{" "}
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/about">
              About&nbsp; <i class="fas fa-id-badge"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/achievement">
              Achievement&nbsp; <i class="fas fa-shield-alt"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/books">
              Books&nbsp; <i class="fas fa-book"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/tutorials">
              Tutorials&nbsp; <i class="fab fa-youtube"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/blog">
              Bolg&nbsp; <i class="fas fa-rss-square"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/contact">
              Contact-Me&nbsp; <i class="far fa-paper-plane"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white ml-5" href="/login">
              LogIn&nbsp; <i class="fas fa-sign-in-alt"></i>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
