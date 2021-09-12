import React from "react";
import "./ContactTable.css";
// import "../ComingSoon/ComingForm.css";
export default function ContactTable() {
  return (
    <div className="col-lg-6 col-12 my-3 my-lg-0 col-right">
      <div
        className="comingsoon-container"
        style={{ backgroundImage: `url(./img/comingsoon-bg.png)` }}
      >
        <div className="coming-content text-center">
          <p>Call For Reservations</p>
          <h2 className="text-white">Opening Hours</h2>
          <div className="coming-subcribe-form text-white">
            <div className="row mt-lg-5 mt-4 contact-working-time">
              <div className="col-6 ">
                <div>
                  {" "}
                  <h5 className="contact-date">Sunday to Tuesday</h5>
                </div>
                <div className="mt-4 d-flex flex-column">
                  <span className="contact-time">09:00</span>
                  <span className="contact-time">22:00</span>
                </div>
              </div>
              <div className="col-6">
                <div>
                  {" "}
                  <h5 className="contact-date">Friday to Saturday</h5>
                </div>
                <div className="mt-4  d-flex flex-column">
                  <span className="contact-time">11:00</span>
                  <span className="contact-time">22:00</span>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 ">
              <div className="col-8 m-auto text-center">
                <div className="bold-separator bold-separator_dark">
                  <span className="mt-0"></span>
                </div>
              </div>
            </div>
            <div className="contact-number">
              <a href="#">+123456789</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
