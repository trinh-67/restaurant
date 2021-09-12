import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="col-lg-6 col-12 text-white col-left">
      <h3>Get In Tough</h3>
      <div className="dots-separator">
        <span></span>
      </div>
      <p className="mt-sm-2 mt-md-3 mt-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
        perspiciatis, magni recusandae esse accusantium hic minus eos eveniet
        quam explicabo, natus repellendus sit corrupti velit unde animi laborum
        perferendis ducimus. Odio earum nobis reiciendis. Culpa alias impedit
        quibusdam beatae ea?
      </p>
      <form>
        <div className="row mt-4 text-center text-white">
          <div className="col-sm-6">
            <input
              className="contact-input"
              type="text"
              name="Name"
              placeholder="Your Name *"
            />
            <span className="text-danger erro-message"></span>
          </div>
          <div className="col-sm-6">
            <input
              className="contact-input"
              type="text"
              name="Email"
              placeholder="Email Address *"
            />
            <span className="text-danger erro-message"></span>
          </div>
          <div className="col-sm-6">
            <input
              className="contact-input"
              type="text"
              name="Phone"
              placeholder="Phone *"
            />
            <span className="text-danger erro-message"></span>
          </div>
          <div className="col-sm-6">
            <input
              className="contact-input"
              type="text"
              name="Subject"
              placeholder="Subject"
            />
            <span className="text-danger erro-message"></span>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 mt-1">
            <textarea
              className="contact-textarea"
              name="Comments"
              cols="30"
              rows="3"
              placeholder="Your Message:"
            ></textarea>
          </div>
        </div>
        <div className="text-sm-left text-center my-2">
          <button type="submit" className="btn-send-message">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
