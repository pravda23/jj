import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p className="cta-btn">
          <a href="mailto:music@johnbartmann.com">BOOK NOW</a>
        </p>
      </div>
      <div>
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
