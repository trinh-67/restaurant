import React from 'react';
import { Fade } from 'react-reveal';
export default function GalleryBanner() {
    return (
        <div className="banner">
        <div
          className="banner-bg"
          style={{ backgroundImage: "url(./img/gallery-bg.jpg)" }}
        >
          <Fade left cascade>
          <div  className="banner-title">
            <div className="content text-center">
              <p className="mb-2">
                <i>Enjoy your time in our restaurant with pleasure.</i>
              </p>
              <h2>Restaurant Galley</h2>
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
