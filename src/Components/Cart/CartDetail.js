import React from "react";
import "./CartDetail.css";
import CartProceed from "./CartProceed";
import CartTable from "./CartTable";
export default function CartDetail(props) {
  return (
    <div
      className="cart-detail brush container-fluid"
      style={{ backgroundImage: `url(./img/section-bg.png)` }}
    >
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>

      <div className="container pb-4">
        <div className="row text-white pb-5">
          <CartTable />
          <CartProceed />
        </div>
        {/* /CHECKOUT TABLE */}
      </div>

      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
