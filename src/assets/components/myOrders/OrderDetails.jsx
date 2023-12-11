// Write all the code here
import React from "react";
import CartItem from "../cart/CartItem";

export default function OrderDetails(order) {
  return (
    <div className="orderDetails">
      <main>
        <h1>ORDER DETAILS</h1>
        <div>
          <h1>Shipping</h1>
          <p>Adress: </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Name: </p>
          <p>Phone: </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>Order Status: </p>
          <p>Placed: </p>
          <p>Delivered: </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>Payment Method: </p>
          <p>Payment Reference: </p>
          <p>Paid: </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>Total Items: </p>
          <p>Delivery Fee: </p>
          <p>Tax: </p>
          <p>
            <b>Total Amount: </b>
          </p>
        </div>
        <article>
          <h1>Ordered items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <h4>2 x 232</h4>
          </div>
          <div>
            <h4>Veg. Cheese Burger</h4>
            <h4>2 x 500</h4>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <h4>1 x 1800</h4>
          </div>
          <div>
            <h4>
              <b>Sub Total</b>
            </h4>
            <h4>
              <b>{2 * 232 + 2 * 500 + 1 * 1800}</b>
            </h4>
          </div>
        </article>
      </main>
    </div>
  );
}
