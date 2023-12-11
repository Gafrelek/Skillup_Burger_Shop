import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <br />
        <strong>All right received {currentYear}</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="#0">
          <AiFillYoutube />
        </a>
        <a href="#0">
          <AiFillInstagram />
        </a>
        <a href="#0">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
}
