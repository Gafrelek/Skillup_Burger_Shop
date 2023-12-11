import React from "react";

export default function CartItem({
  itemNum,
  burgerSrc,
  price,
  title,
  handler,
}) {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={burgerSrc} alt={itemNum} />
      </div>
      <div>
        <button>+</button>
        <input type="text" value="0" />
        <button>-</button>
      </div>
    </div>
  );
}
