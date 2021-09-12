import React from "react";

export default function Brush() {
  return (
    <div className="brush container-fluid">
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
