import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction} from "../../redux/actions/MenuActions";
import FoodFilter from "./FoodFilter";
import Fade from 'react-reveal/Fade';
import "./FoodList.css";

export default function FoodList(props) {
  const menuArr = useSelector(state => state.MenuReducer.menuArr);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItemAction(item));
  }
  
  const renderMenu = () => {
    return menuArr.map((item,index) => {
      return (
        <Fade key={index} bottom cascade>
          <div className="col-md-4 col-sm-6 col-12 mb-3 ">
            <div className="card foodlist-card">
              <div className="card-img-wrap">
                <img src={item.img} className="card-img-top" alt="food" />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  {item.title} <span>Sale -30%</span>
                </h3>
                {item.desc.length > 50 ? (
                  <p className="card-text mb-1">
                    {item.desc.substr(0,150)}...
                  </p>
                   ) : (
                    <p className="card-text mb-1">
                      {item.desc}
                    </p>
                   )}
                <div className="foodlist-price">
                  <span>{item.price} $</span>
                  <button onClick={()=>{addToCart(item)}} className="btn-add-cart">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      )
    })
  }

  return (
    <div className="foodlist brush container-fluid" style={{backgroundImage:`url(./img/section-bg.png)`}}>
      <div
        className="bg-brush-top"
        style={{ backgroundImage: "url(./img/brush-dec.png)" }}
      ></div>
      <div className="foodlist_content container pb-5" >
        <Fade bottom cascade>
        <div className="dots-separator text-center">
          <span></span>
        <h3 className="menu-title">Our Menu</h3>
        </div>
        </Fade>
        <FoodFilter/>
        <div className="row mt-5">
         {renderMenu()}
        </div>
        <div className="row mt-5">
          <div className="col-8 m-auto text-center">
            <div className="bold-separator bold-separator_dark">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
        className="bg-brush-bottom"
      ></div>
    </div>
  );
}
