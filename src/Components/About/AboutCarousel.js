import React from 'react';  
import './AboutCarousel.css';
import Fade from 'react-reveal/Fade';
export default function AboutCarousel() {
    
    return (
       <Fade bottom> <div className="carousel m-auto">
       <div className="carousel-wrap"></div>
       <ul className="slides">
         <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
         <li className="slide-container">
           <div className="slide-image">
             <img src="./img/carousel1.jpg" alt="item1"/>
           </div>
           <div className="carousel-controls">
             <label htmlFor="img-3" className="prev-slide">
               <span>‹</span>
             </label>
             <label htmlFor="img-2" className="next-slide">
               <span>›</span>
             </label>
           </div>
         </li>
         <input type="radio" name="radio-buttons" id="img-2" />
         <li className="slide-container">
           <div className="slide-image">
           <img src="./img/carousel2.jpg" alt="item2"/>
           </div>
           <div className="carousel-controls">
             <label htmlFor="img-1" className="prev-slide">
               <span>‹</span>
             </label>
             <label htmlFor="img-3" className="next-slide">
               <span>›</span>
             </label>
           </div>
         </li>
         <input type="radio" name="radio-buttons" id="img-3" />
         <li className="slide-container">
           <div className="slide-image">
           <img src="./img/carousel3.jpg" alt="item3"/>
           </div>
           <div className="carousel-controls">
             <label htmlFor="img-2" className="prev-slide">
               <span>‹</span>
             </label>
             <label htmlFor="img-1" className="next-slide">
               <span>›</span>
             </label>
           </div>
         </li>
         <div className="carousel-dots">
           <label htmlFor="img-1" className="carousel-dot ms-3" id="img-dot-1" />
           <label htmlFor="img-2" className="carousel-dot ms-3" id="img-dot-2" />
           <label htmlFor="img-3" className="carousel-dot ms-3" id="img-dot-3" />
         </div>
       </ul>
     </div>
</Fade>
    )
}
