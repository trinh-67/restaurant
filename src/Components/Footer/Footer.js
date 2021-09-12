import React, { useLayoutEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {

  const scrollTop = useRef(null)
    useLayoutEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (scrollTop.current === null)return;

            if(window.scrollY > 0) scrollTop.current.classList.add("active")
            else scrollTop.current.classList.remove("active")

            scrollTop.current.addEventListener("click", (e) => {
                window.scrollTo(0,0)
            })
        })
  }, [])
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <NavLink to="/" className="footer-logo">
              <img src="./img/logo.png" alt="logo" />
            </NavLink>
            <div className="footer-social">
              <span className="footer-social-title">Follow us :</span>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-vk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-body">
            <div className="row">
              <div className="col-md-4 col-12 mb-sm-3 mb-md-0 mb-4">
                <h2 className="footer-body-title">About Us</h2>
                <div>
                <p className="footer-body-content">
                  Lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                </div>
                <NavLink  className="page-link" to="/about">Read More</NavLink>
              </div>
              <div className="col-md-4 col-12 mb-sm-3 mb-md-0 mb-4">
                <h2 className="footer-body-title">Contact Info</h2>
                <div className="footer-body-contact text-white">
                  <ul>
                    <li>
                      <span>Call :</span>
                      <a href="#">+0987654321</a>,

                      <a className="ms-1" href="#">+0123456789</a>
                    </li>
                    <li>
                      <span>Write :</span>
                      <a href="#">myemail@domain.com</a>
                    </li>
                    <li>
                      <span>Find us : </span>
                      <a href="#">USA 27TH Brooklyn NY</a>
                    </li>
                  </ul>
                  <NavLink className="page-link" to="/contact">Get In Tough</NavLink>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-sm-3 mb-md-0 mb-4">
                <h2 className="footer-body-title">Subscribe</h2>
                <div>
                <p className="footer-body-content">
                  Lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                </div>
                <form className="footer-body-form mt-2">
              <input
                name="EMAIL"
                placeholder="Your Email"
                type="text"
              />
              <button type="submit" className="footer-subscribe-btn">
                Send
              </button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-to-top" ref={scrollTop}>
          <i class="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}
