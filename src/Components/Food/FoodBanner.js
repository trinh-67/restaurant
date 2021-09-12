import React from "react";
import '../Global/Brush.css'
import '../Global/Banner.css';
import Fade from 'react-reveal/Fade';
export default function FoodBanner() {
  return (
    <div className="banner">
      <div
        className="banner-bg"
        style={{ backgroundImage: "url(./img/menu-bg.jpg)" }}
      >
        <Fade left cascade>
        <div className="banner-title">
          <div className="content text-center">
            <p className="mb-2">
              <i>Enjoy your time in our restaurant with pleasure.</i>
            </p>
            <h2>Discover Our menu</h2>
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
