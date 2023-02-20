import Social from "./Social.component";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p className="cta-btn">
          <span className="bouncer">
            BOOK NOW <FaArrowRight />
          </span>

          <a href="https://wa.link/zed59o" target="_blank">
            <FaWhatsapp className="m-1 p-2" fontSize="3rem" color="#ffd21d" />
          </a>
          <a href="mailto:music@johnbartmann.com" target="_blank">
            <FaEnvelope className="m-1 p-2" fontSize="3rem" color="#ffd21d" />
          </a>
        </p>
      </div>
      <Social />
    </>
  );
};

export default Footer;
