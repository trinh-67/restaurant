import React from 'react';
import '../Global/Brush.css';
import GalleryGrid from './GalleryGrid';
export default function GalleryContent() {
    return (
        <div className="brush container-fluid">
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
          <h3 className="gallery-title">Explore Our Gallery</h3>
        <GalleryGrid/>
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
    )
}
