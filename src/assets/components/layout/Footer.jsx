import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div>
          <h2>
            <b>Burger Shop</b>
          </h2>
          <p>We are trying to give you the best taste possible.</p>
          <br />
          <em>We give attention to genuine feedback.</em>
          <br />
          <strong>All right received</strong>
          <p>{currentYear}</p>
        </div>
        <aside>
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#0">
              <AiFillYoutube />
            </a>
            <a href="#0">
              <AiFillInstagram />
            </a>
            <a href="#0">
              <AiFillGithub />
            </a>
          </div>
        </aside>
      </div>
    </footer>
  );
}
