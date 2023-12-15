import React from "react";

export default function OrderDetails(order) {
  return (
    <div className="orderDetails">
      <main>
        <h1>ORDER DETAILS</h1>
        <div>
          <h1>Shipping</h1>
          <p>Address: Storgatan 123, 123 45 Stockholm, Sweden</p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Name: John Doe</p>
          <p>Phone: +46 70 123 45 67</p>
        </div>
        <div>
          <h1>Status</h1>
          <p>Order Status: Processed</p>
          <p>Placed: 2023-12-11 20:32</p>
          <p>Delivered: 2023-12-11 21:12</p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>Payment Method: Card</p>
          <p>Payment Reference: gr7e89gyrehg</p>
          <p>Paid: 2023-12-11 20:32</p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>Total Items: 3</p>
          <p>Delivery Fee: 200</p>
          <p>Tax: 2732</p>
          <p>
            <b>Total Amount: 2532</b>
          </p>
        </div>
        <article>
          <h1>Ordered items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <h4>1 x 232</h4>
          </div>
          <div>
            <h4>Veg. Cheese Burger</h4>
            <h4>1 x 500</h4>
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
              <b>{1 * 232 + 1 * 500 + 1 * 1800}</b>
            </h4>
          </div>
        </article>
      </main>
    </div>
  );
}
