import React from "react";
import "../Global/Brush.css";
import Fade from "react-reveal";

export default function CartBanner() {
  return (
    <div className="banner">
      <div
        className="banner-bg"
        style={{ backgroundImage: "url(./img/cart-bg.jpg)" }}
      >
        <Fade left cascade>
          <div className="banner-title">
            <div className="content text-center">
              <p className="mb-2">
                <i>Order food with home delivery</i>
              </p>
              <h2>Your Cart</h2>
              <div className="dots-separator">
                <span></span>
              </div>
              <div className="section-scroll">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="banner-overlay"></div>
    </div>
  );
}
