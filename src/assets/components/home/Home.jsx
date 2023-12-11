import React from "react";

export default function Home() {
  // const options = {
  //   initial: {
  //     x: "-100%",
  //     opacity: 0,
  //   },
  //   whileInView: {
  //     x: 0,
  //     opacity: 1,
  //   },
  // };
  return (
    <>
      <div className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Have a tasty life</p>
        </div>
        <a href="/Menu">Explore Menu</a>
      </div>
    </>
  );
}
