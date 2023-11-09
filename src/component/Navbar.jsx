import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/">
            Eshop
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/cart">
                  <i class="fa fa-shopping-basket" aria-hidden="true">
                    {" "}
                    {/* Panier ({state.length}) */}
                  </i>
                </NavLink>
              </li>
              <li>
                <NavLink class="nav-link" to="/login">
                  <i class="fa fa-user-plus" aria-hidden="true">
                    LOGIN
                  </i>
                </NavLink>
              </li>
              <button>
                <i class="fa fa-toggle-on" aria-hidden="true">
                  Mode
                </i>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
