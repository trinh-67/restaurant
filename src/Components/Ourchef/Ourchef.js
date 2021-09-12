import React from "react";
import "./OurChef.css";
import "../Global/Brush.css";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/";
export default function OurChef() {
  return (
    <div className="brush container-fluid">
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
      <Fade left cascade>
        <div className="chef-title text-center">
          <h4>Our awesome team</h4>
          <h2>Met Our Chefs</h2>
          <div className="dots-separator">
            <span></span>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="chef">
          <div className="container">
            <div className="row py-5">
              <div className="col-margin col-md-4 mb-sm-5 mb-md-0">
                <div className="team-box">
                  <div className="team-photo">
                    <img
                      src="./img/team1.jpg"
                      alt="team1"
                      className="respimg w-100"
                    />
                    <div className="overlay" />
                    <div className="team-social">
                      <span className="ts_title">Follow</span>
                      <ul className="no-list-style">
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
                  <div className="team-info">
                    <h3> Kevin Gray </h3>
                    <h4>Master chef in New York</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-margin col-md-4 mb-sm-5 mb-md-0">
                <div className="team-box">
                  <div className="team-photo">
                    <img
                      src="./img/team3.jpg"
                      alt="team3"
                      className="respimg w-100"
                    />
                    <div className="overlay" />
                    <div className="team-social">
                      <span className="ts_title">Follow</span>
                      <ul className="no-list-style">
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
                  <div className="team-info">
                    <h3>Taylor Roberts</h3>
                    <h4>Master chef in Maiami</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-margin col-md-4 mb-sm-5 mb-md-0">
                <div className="team-box">
                  <div className="team-photo">
                    <img
                      src="./img/team2.jpg"
                      alt="team2"
                      className="respimg w-100"
                    />
                    <div className="overlay" />
                    <div className="team-social">
                      <span className="ts_title">Follow</span>
                      <ul className="no-list-style">
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
                  <div className="team-info">
                    <h3>Austin Evon</h3>
                    <h4>Master chef in Florida</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 pb-5">
                <div className="chef-footer">
                  <h4>Want to cook something tasty? Read our best recipes.</h4>
                  <NavLink to="/blog">
                    <button className="chef-blog-btn">Recipes Book</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
