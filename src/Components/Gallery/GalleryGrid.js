import React from "react";
import "./GalleryGrid.css";
export default function GalleryGrid() {
  return (
    <div className="gallery-grid container py-5">
      <div className="gallery-card item1">
        <div className="gallery-card-wrap">
          <img src="./img/1.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/2.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/3.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/4.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card item2">
        <div className="gallery-card-wrap">
          <img src="./img/19.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/6.jpg" className="card-img-top" alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/7.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/8.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/team1.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/counting-bg.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
      <div className="gallery-card">
        <div className="gallery-card-wrap">
          <img src="./img/team3.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
      <div className="gallery-card item3">
        <div className="gallery-card-wrap">
          <img src="./img/20.jpg" className="card-img-top " alt="pic1" />
        </div>
      </div>
    </div>
  );
}
