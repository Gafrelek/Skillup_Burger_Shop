import React from "react";
import { motion } from "framer-motion";
import me from "../../skj.jpg";
const Founder = () => {
  return (
    <section className="founder">
      <div className="pictureContainer">
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Nelson</h3>
      </div>
      <div className="founderDescription">
        <p>Hey, Everyone I am Nelson, the founder of Burger Shop.</p>
        <br />
        <p>Our aim is to create the most tasty burger on planet.</p>
      </div>
    </section>
  );
};

export default Founder;
