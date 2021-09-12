import React from 'react';
import '../Global/Brush.css'
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
export default function ContactContent() {
    return (
        <div className="brush container-fluid">
        <div
          className="bg-brush-top"
          style={{ backgroundImage: "url(./img/brush-dec.png)" }}
        ></div>
        <div className="contact pb-md-5">
            <div className="container">
            <div className="row">
                <ContactForm/>
               <ContactTable/>
            </div>
            </div>
        </div>
        <div
          style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
          className="bg-brush-bottom"
        ></div>
      </div>
    )
}
