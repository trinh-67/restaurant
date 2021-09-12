import React from "react";
import "./Counting.css";
import CountUp from "react-countup";

export default function Counting() {
  return (
    <div
      className="counting"
      style={{ backgroundImage: `url(./img/counting-bg.jpg)` }}
    >
      <div className="counting-overlay"></div>
      <div className="container counting-content text-center">
        <div className="row">
          <div className="col-3">
            <div className="milestone-counter">
              <div className="stats animaper">
                <div className="num">
                  <CountUp duration={10} start={0} end={254} />
                </div>
              </div>
            </div>
            <h6 className="counting-title">New Visiters Every Week</h6>
          </div>
          <div className="col-3">
            <div className="milestone-counter">
              <div className="stats animaper">
                <div className="num">
                  <CountUp duration={10} start={0} end={12168} />
                </div>
              </div>
            </div>
            <h6 className="counting-title">Happy Customers Every Year</h6>
          </div>
          <div className="col-3">
            <div className="milestone-counter">
              <div className="stats animaper">
                <div className="num">
                  <CountUp duration={10} start={0} end={172} />
                </div>
              </div>
            </div>
            <h6 className="counting-title">Won Awards</h6>
          </div>
          <div className="col-3">
            <div className="milestone-counter">
              <div className="stats animaper">
                <div className="num">
                  <CountUp duration={10} start={0} end={732} />
                </div>
              </div>
            </div>
            <h6 className="counting-title">Weekly Deliveries</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
