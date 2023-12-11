import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../burger1.png";
import burger2 from "../../burger2.png";
import burger3 from "../../burger3.png";

function Menu() {
  return (
    <div id="menu">
      <h1>MENU</h1>
      <div>
        {/* <Popup trigger=></Popup> */}
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          // handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger2}
          price={250}
          title="Bacon Burger"
          // handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger3}
          price={300}
          title="Double Burger Menu"
          // handler={addToCartHandler}
          delay={0.1}
        />
      </div>
    </div>
  );
}
export default Menu;
