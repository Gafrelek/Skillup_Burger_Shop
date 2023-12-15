import React, { useState } from "react";

export default function CartItem({
  itemNum,
  burgerSrc,
  price,
  title,
  handler,
}) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={burgerSrc} alt={itemNum} />
      </div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <input type="text" value={quantity} readOnly />
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
