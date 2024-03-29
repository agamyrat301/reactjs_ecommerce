import React from "react";

export default function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
            E-commerce
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="buttons">

              <a href="" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in me-2"></i>
                Login
              </a>

              <a href="" className="btn btn-outline-dark me-2">
                <i className="fa fa-user-plus me-1"></i>
                Register
              </a>

              <a href="" className="btn btn-outline-dark me-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart
              </a>


            </div>
          </div>
        </div>
      </nav>
  );
}
