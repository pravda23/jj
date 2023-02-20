import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
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
            <FaWhatsapp className="m-1" fontSize="2rem" color="#ffd21d" />
          </a>
          <a href="mailto:music@johnbartmann.com" target="_blank">
            <FaEnvelope className="m-1" fontSize="2rem" color="#ffd21d" />
          </a>
        </p>
      </div>
      <div className="social-icons">
        <a href="https://tiktok.com/@getjohnnyjazz" target="_blank">
          <FaTiktok className="m-1" fontSize="2rem" color="#ffd21d" />
        </a>

        <a href="https://instagram.com/getjohnnyjazz" target="_blank">
          <FaInstagram className="m-1" fontSize="2rem" color="#ffd21d" />
        </a>
        <a href="https://facebook.com/getjohnnyjazz" target="_blank">
          <FaFacebook className="m-1" fontSize="2rem" color="#ffd21d" />
        </a>
      </div>
    </>
  );
};

export default Footer;
