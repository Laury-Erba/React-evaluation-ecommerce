import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.itemReducer.cart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Eshop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="fa fa-shopping-basket" aria-hidden="true">
                    {" "}
                    Panier ({cart.length})
                  </i>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  <i className="fa fa-user-plus" aria-hidden="true">
                    LOGIN
                  </i>
                </NavLink>
              </li>
              <button>
                <i className="fa fa-toggle-on" aria-hidden="true">
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
