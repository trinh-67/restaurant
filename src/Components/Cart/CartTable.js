import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeAmountAction,
  removeItemAction,
  usingCouponAction,
} from "../../redux/actions/MenuActions";

export default function CartTable(props) {
  const cartItem = useSelector((state) => state.MenuReducer.cartItem);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState({
    couponCode: "",
    valid: true,
    value: 0,
  });

  const renderCartItem = () => {
    return cartItem.map((item, index) => {
      return (
        <tr key={index}>
          <td className="bg-modify1">
            <img width={40} height={40} src={item.img} alt="item"></img>
          </td>
          <td className="bg-modify2">{item.title}</td>
          <td className="bg-modify1">{item.price}$</td>
          <td className="amount-modify">
            <i
              onClick={() => changeAmount(item.id, 1)}
              className="fa fa-angle-up"
            ></i>
            {item.amount}
            <i
              onClick={() => changeAmount(item.id, -1)}
              className="fa fa-angle-down"
            ></i>
          </td>
          <td className="bg-modify1">
            {(item.amount * item.price).toFixed(2)}$
          </td>
          <td>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
              className="cart-btn-remove"
            >
              <i className="fa fa-times"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  const amountCurrentItem = () => {
    return cartItem.reduce((total, item, index) => {
      return (total += item.amount);
    }, 0);
  };

  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  };

  const changeAmount = (id, amount) => {
    dispatch(changeAmountAction(id, amount));
  };

  // Coupon
  const handleChangeCoupon = (e) => {
    setCoupon({
      ...coupon,
      [e.target.name]: e.target.value,
    });
  };

  const usingCoupon = (e) => {
    e.preventDefault();
    let updateCoupon = { ...coupon };
    dispatch(usingCouponAction(updateCoupon));
  };

  return (
    <div className="col-md-8">
      <h4 className="cart-title">
        Your cart <span>{amountCurrentItem()} items</span>
      </h4>
      <table className="table table-border checkout-table text-center text-white">
        <thead>
          <tr>
            <th className="bg-modify1" style={{ width: "70px" }}>
              Item
            </th>
            <th className="bg-modify2">Description</th>
            <th className="bg-modify1">Price</th>
            <th className="bg-modify2">Count</th>
            <th className="bg-modify1">Total</th>
            <th className="bg-modify2"></th>
          </tr>
        </thead>
        <tbody>{renderCartItem()}</tbody>
      </table>
      {/* COUPON */}
      <div className="coupon-holder mt-3">
        <div>
          <input
            onChange={handleChangeCoupon}
            type="text"
            name="couponCode"
            placeholder="code1 or code2 or code3"
          />
          <button
            onClick={usingCoupon}
            type="button"
            className="coupon-btn-apply"
          >
            Apply
          </button>
        </div>
        <NavLink to="/menu">
          <button type="submit" className="cart-btn-back">
            Back To Menu
          </button>
        </NavLink>
      </div>
      {/* /COUPON */}
    </div>
  );
}
