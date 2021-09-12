import React from "react";
import { NavLink } from "react-router-dom";
import "./ComingForm.css";
export default function ComingForm() {
  return (
    <div className="comingsoon-form">
      <div
        className="comingsoon-container"
        style={{ backgroundImage: `url(./img/comingsoon-bg.png)` }}
      >
        <div className="coming-content text-center">
          <NavLink to="/home">
            <img src="./img/logo.png" style={{ width: 100 }}></img>
          </NavLink>
          <p>Under Construction</p>
          <h2 className="text-white">Our Website is Coming Soon</h2>
          <div className="coming-subcribe-form text-white">
            <span>
              Sign up now to our newsletter and you will be one of the first
              know when our new website as ready
            </span>
            <form className="mt-4">
              <input
                name="EMAIL"
                placeholder="Your Email"
                type="text"
              />
              <button type="submit" className="subscribe-btn">
                Send
              </button>
            </form>
            <div className="row mt-lg-5 mt-0">
          <div className="col-8 m-auto text-center">
            <div className="bold-separator bold-separator_dark">
              <span className="mt-0"></span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
