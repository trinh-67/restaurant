import React from "react";
import { NavLink } from "react-router-dom";
import "../Global/Brush.css";
import AboutCarousel from "./AboutCarousel";
import "./AboutTitle.css";
import Fade from "react-reveal/Fade";
export default function AboutTitle() {
  return (
    <div className="brush container-fluid">
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
      <div className="container">
        <div className="row about-title">
          <div className="cube">
            <img src="./img/cube.png" alt="cube"></img>
          </div>
          <div className="wave">
            <img src="./img/wave.png" alt="wave"></img>
          </div>
          <div className="col-md-6 text-white">
            <Fade bottom>
              <h4>Our story</h4>
              <h2>Few words about us</h2>
              <div className="dots-separator">
                <span></span>
              </div>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia perspiciatis, magni recusandae esse accusantium hic
                minus eos eveniet quam explicabo, natus repellendus sit corrupti
                velit unde animi laborum perferendis ducimus. Odio earum nobis
                reiciendis. Culpa alias impedit quibusdam beatae ea?
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
              <NavLink to="/menu">
                <button className="about-title-btn">Explore Our Menu</button>
              </NavLink>
            </Fade>
          </div>
          <div className="col-md-6 mt-sm-5 mt-md-0 about-carousel">
            <AboutCarousel />
          </div>
        </div>
      </div>
      
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
