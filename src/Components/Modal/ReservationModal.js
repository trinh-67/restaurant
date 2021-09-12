import React, { useState } from "react";
import "./ReservationModal.css";
import Swal from "sweetalert2";
export default function ReservationModal() {
  const [valuesUser, SetValuesUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Date: "",
    Time: "",
    Person: "",
    Comments: "",
  });
  const [errorsUser, SetErrorsUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Date: "",
    Time: "",
    Person: "",
    Comments: "",
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    let newValues = { ...valuesUser, [name]: value };
    let newErrors = { ...errorsUser };

    if (value.trim() === "") {
      newErrors[name] = name + " is required !";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        newErrors[name] = name + " is invalid !";
      } else {
        newErrors[name] = "";
      }
    }

    SetValuesUser(newValues);
    SetErrorsUser(newErrors);
  };

  const handleReserve = (e) => {
    e.preventDefault();
    let valid = true;
    let reserveContent = "";
    for (let key in valuesUser) {
      if (valuesUser[key] === "") {
        valid = false;
      }
      reserveContent += `
      <p className="text-white"><b>${key}: </b> ${valuesUser[key]}</p>
      `;
    }
    if (!valid) {
      Swal.fire({
        title: "Please fill in the form!",
        icon: "error",
        confirmButtonText: "Back",
      });
      return;
    }
    Swal.fire({
      title: "We have received your reservation!",
      html: reserveContent,
      icon: "success",
      confirmButtonText: "Back",
    });
  };

  return (
    <div
      className="modal reservation-modal fade"
      id="reservationModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{ backgroundImage: `url(/img/section-bg.png)` }}
        >
          <button
            type="button"
            className="close-reservation-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fa fa-times"></i>
          </button>
          <div className="modal-reservation-title text-center">
            <h4 className="mt-4">
              <i>Don't forget to book a table</i>
            </h4>
            <h2>Table Reservations</h2>
            <div className="dots-separator modal-dots">
              <span></span>
            </div>
          </div>
          <form onSubmit={handleReserve}>
            <div className="row mt-4 text-center text-white">
              <div className="col-sm-6">
                 
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Name"
                  placeholder="Your Name *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Name}
                </span>
              </div>
              <div className="col-sm-6">
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Email"
                  placeholder="Email Address *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Email}

                </span>
              </div>
              <div className="col-sm-6">
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Phone"
                  placeholder="Phone *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Phone}

                </span>
              </div>
              <div className="col-sm-6">
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Person"
                  placeholder="Person *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Person}
                </span>
              </div>
              <div className="col-sm-6">
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Date"
                  placeholder="Date *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Date}
                </span>
              </div>
              <div className="col-sm-6">
                <input
                  onChange={handleChange}
                  className="reservation-input"
                  type="text"
                  name="Time"
                  placeholder="Time *"
                />
                <span className="text-danger erro-message">
                {errorsUser.Time}
                </span>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12 mt-2">
                <textarea
                  onChange={handleChange}
                  className="reservation-textarea"
                  name="Comments"
                  cols="30"
                  rows="3"
                  placeholder="Your Message:"
                ></textarea>
              </div>
            </div>
            <div className="text-center my-3">
              <button className="btn-reserve">Reserve Table</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
