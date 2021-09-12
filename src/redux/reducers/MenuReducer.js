import { act } from "react-dom/test-utils";
import menuData from "../../Data/Data.json";
import { ADD_ITEM, CHANGE_AMOUNT, FILTER_ITEM, REMOVE_ITEM, USING_COUPON } from "../types/MenuType";
const stateDefault = {
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): [],
    menuArr: menuData,
    couponDiscount: { couponCode: "", valid: false, value: 0},
};

export default (state = stateDefault, action) => {
    switch (action.type) {

        case FILTER_ITEM: {
            let updateMenuArr = [...menuData];
            let filterItem = updateMenuArr.filter(
              (item) => item.category === action.option
            );
            updateMenuArr = filterItem;
            state.menuArr = updateMenuArr;
            if (action.option === "all") {
              state.menuArr = menuData;
            }
            return { ...state };
        }
        case ADD_ITEM: {
            const updateCartItem = [...state.cartItem];
            let index = updateCartItem.findIndex(
              (item) => item.id === action.newCartItem.id
            );
            if (index !== -1) {
              updateCartItem[index].amount += 1;
            } else {
              updateCartItem.push(action.newCartItem);
            }
            state.cartItem = updateCartItem;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
            return { ...state };
          }
        case REMOVE_ITEM: {
          const updateCartItem = [...state.cartItem];
          let index = updateCartItem.findIndex((item) => item.id === action.id);
          if (index !== -1){
            updateCartItem.splice(index, 1);
          }
          state.cartItem = updateCartItem;
          localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
          return {...state};
        }
        case CHANGE_AMOUNT: {
          const updateCartItem = [...state.cartItem];
          let index = updateCartItem.findIndex((item) => item.id === action.id);
          if (index !== -1){
            updateCartItem[index].amount += action.amount;
            if (updateCartItem[index].amount < 1){
              updateCartItem[index].amount += 1;
            }
          }
          state.cartItem = updateCartItem;
          return {...state};
        }

        case USING_COUPON: {
          let updatecouponDiscount = {...state.couponDiscount};
          if(action.updateCoupon.couponCode === "code1") {
            updatecouponDiscount.value = 5;
            updatecouponDiscount.valid = true;
          }
          if(action.updateCoupon.couponCode === "code2") {
            updatecouponDiscount.value = 10;
            updatecouponDiscount.valid = true;
          }
          if(action.updateCoupon.couponCode === "code3") {
            updatecouponDiscount.value = 15;
            updatecouponDiscount.valid = true;
          }
          state.couponDiscount = updatecouponDiscount;
          return {...state};
        }
        default:
            return {...state}
        }
}
