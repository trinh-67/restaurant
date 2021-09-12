import React from "react";
import "../Global/Brush.css";
import BlogSingle from "./BlogSingle";
import "../News/NewsPost.css";
export default function BlogContent() {
  return (
    <div className="brush container-fluid">
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
      <div>
        <BlogSingle />
      </div>
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
