import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../burger1.png";
import burger2 from "../../burger2.png";
import burger3 from "../../burger3.png";
import CartItem from "./CartItem";
import "../../../styles/cart.scss";

export default function Cart() {
  return (
    <div className="cart">
      <main>
        <CartItem title={"Cheese Burger"} burgerSrc={burger1} />
        <CartItem title={"Veg Cheese Burger"} burgerSrc={burger2} />
        <CartItem
          title={"Cheese Burger with French Fries"}
          burgerSrc={burger3}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </div>
  );
}
