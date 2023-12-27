import React from "react";

export default function Home() {
  return (
    <>
      <div className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Have a tasty life</p>
        </div>
        <div className="buttonContainer">
          <a href="/Menu">Explore Menu</a>
        </div>
      </div>
    </>
  );
}
