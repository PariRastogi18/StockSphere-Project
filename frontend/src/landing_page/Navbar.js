import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg  border-bottom"
        style={{
          backgroundColor: "#fff",
          padding: "1.10rem",
        }}
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              style={{ width: "20%" }}
              alt="logo"
            />
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item " style={{ marginLeft: "1.5rem" }}>
                <Link class="nav-link active" to="#">
                  <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
