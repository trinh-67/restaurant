import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
export default function Header() {
  const cartItem = useSelector((state) => state.MenuReducer.cartItem);
  const [hide, setHide] = useState("");
  let classCollapse = "";
  const amountCurrentItem = () => {
    return cartItem.reduce((total, item, index) => {
      return (total += item.amount);
    }, 0);
  };
  const closeMenu = () => {
    if (classCollapse === "") {
      setHide("hide");
      classCollapse = hide;
    }
    if (classCollapse === "hide") {
      setHide("");
      classCollapse = hide;
    }
  };

  return (
    <div className="header container-fluid">
      <div className="header-content">
        <div className="header-top container">
          <div className="row">
            <div className="col-12 p-0 text-end">
              <div className="header-top_contact my-2">
                <NavLink className="header-contact" to="/">
                  <span>Call now:</span> +0123456789
                </NavLink>
                <NavLink className="header-contact ms-3" to="/">
                  <span>Write :</span> mymail@domain.com
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <nav className="navbar navbar-expand-lg">
            <div className="container header-container p-0">
              <NavLink className="navbar-brand logo" to="/">
                <img src="./img/logo.png" alt="./img/logo.png"></img>
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
                <i className="navbar-toggler-icon fa fa-bars"></i>
              </button>
              <div
                className={`collapse navbar-collapse ${hide}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      onClick={closeMenu}
                      activeClassName="activeCSS"
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={closeMenu}
                      activeClassName="activeCSS"
                      className="nav-link"
                      to="/menu"
                    >
                      MENU
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={closeMenu}
                      activeClassName="activeCSS"
                      className="nav-link"
                      to="/about"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={closeMenu}
                      activeClassName="activeCSS"
                      className="nav-link"
                      to="/contact"
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={closeMenu}
                      activeClassName="activeCSS"
                      className="nav-link"
                      to="/news"
                    >
                      NEWS
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      activeClassName="activeCSS"
                      className="nav-link dropdown-toggle"
                      to="/page"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PAGES
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          onClick={closeMenu}
                          className="dropdown-item"
                          to="/cart"
                        >
                          CART
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={closeMenu}
                          className="dropdown-item"
                          to="/gallery"
                        >
                          GALLERY
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={closeMenu}
                          className="dropdown-item"
                          to="/blog"
                        >
                          BLOG
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={closeMenu}
                          className="dropdown-item"
                          to="/coming-soon"
                        >
                          COMING SOON
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="narbav-right d-flex">
                <div className="show-cart">
                  <NavLink to="/cart">
                    <button className="btn-show-cart">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </NavLink>
                  <span className="number-item">{amountCurrentItem()}</span>
                </div>
                <div className="show-reservation">
                  <button
                    className="btn-show-reservation"
                    data-bs-toggle="modal"
                    data-bs-target="#reservationModal"
                  >
                    <span className="px-3">Reservation</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
