import React from 'react';
import './Cart.css'
const Cart = (props) => {
 const {cart} = props;
 let total = 0;
 let totalQuantity = 0;
 for(const product of cart){
  if(!product.quantity){
   product.quantity = 1;
  }
  totalQuantity += product.quantity;
  total += product.price * product.quantity;
 }
 const shipping = total>0? 15 : 0;
 const tax = (total + shipping) * 0.10;
 const grandTotal = (total + tax + shipping);
 return (
   <div className="cart">
     <h3>Order Summary </h3>
     <h4>Item ordered : {totalQuantity}</h4>
     <h4>Total Price : $ {total.toFixed(2)}</h4>
     <h4>Shipping : $ {shipping.toFixed(2)}</h4>
     <h4>Tax : $ {tax.toFixed(2)}</h4>
     <h4>GrandTotal : $ {grandTotal.toFixed(2)}</h4>
   </div>
 );
};

export default Cart;