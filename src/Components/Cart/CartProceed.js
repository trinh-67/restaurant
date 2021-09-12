import React, {useState} from 'react';
import {useSelector} from 'react-redux';

export default function CartProceed(props) {
    const cartItem = useSelector(state => state.MenuReducer.cartItem);
    const couponDiscount = useSelector(state => state.MenuReducer.couponDiscount);
    const totalPrice = () => {
        return cartItem.reduce((total, item, index) => {
            return (total += item.amount * item.price);
        },0);
    };

    return (
        <div className="col-md-4 mt-5 mt-sm-5 mt-md-0">
            <div className="cart-totals">
               <h3 className="text-center">Cart totals</h3>  
               <table className="total-table">
                    <tbody>
                        <tr>
                            <th>Cart Subtotal:</th>
                            <td>{(totalPrice()).toFixed(2)} $</td>
                        </tr>
                        <tr>
                            <th>Discount:</th>
                            <td>{couponDiscount.valid ? couponDiscount.value : 0} %</td>
                        </tr>
                        <tr>
                            <th>Total:</th>
                            <td>{(totalPrice() - (totalPrice()*couponDiscount.value/100)).toFixed(2)}$</td>
                            <td></td>
                        </tr>
                    </tbody>
               </table>  
               <button type="submit" className="cart-btn-checkout">Proceed to Checkout</button>                        
            </div>
        </div>
    )
}
