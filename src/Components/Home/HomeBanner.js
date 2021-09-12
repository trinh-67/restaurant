import React from 'react';
import '../Global/Banner.css';
import Fade from 'react-reveal/Fade';
export default function HomeBanner() {
    return (
        <div className="banner">
        <div
          className="banner-bg"
          style={{ backgroundImage: "url(./img/20.jpg)" }}
        >
          <Fade left cascade>
          <div  className="banner-title">
            <div className="content text-center">
              <p className="mb-2">
                <i>Our last News and Events</i>
              </p>
              <h2>Our Journal</h2>
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
    )
}
