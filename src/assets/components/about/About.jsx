import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../skj.jpg";
import Founder from "../home/Founder";

function About() {
  return (
    <div class="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            This is Burger Shop. The place for the most tasty burgers on the
            entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <Founder />
          </article>
        </div>
      </main>
    </div>
  );
}

export default About;
