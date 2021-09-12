import { ADD_ITEM, CHANGE_AMOUNT, FILTER_ITEM, REMOVE_ITEM, USING_COUPON } from "../types/MenuType";

export const filterItemAction = (option) => ({
  type: FILTER_ITEM,
  option,
});

export const addItemAction = (item) => ({
    type: ADD_ITEM,
    newCartItem: {
      ...item,
      amount: 1,
    },
  });

export const removeItemAction = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const changeAmountAction = (id, amount) => ({
  type: CHANGE_AMOUNT,
  id,
  amount,
});

export const usingCouponAction = (updateCoupon) => ({
  type: USING_COUPON,
  updateCoupon,
});
