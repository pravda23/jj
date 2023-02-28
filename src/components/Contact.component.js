import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaArrowRight,
  FaArrowDown,
  FaAngleDown,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className="bouncer">
        <div>BOOK NOW</div>
        <div>
          <FaAngleDown />
        </div>
      </h1>
      <div className="contact-icons">
        <a href="https://wa.link/zed59o" target="_blank">
          <FaWhatsapp className="m-1 p-2" fontSize="4rem" color="#ffd21d" />
        </a>
        <a href="mailto:music@johnbartmann.com" target="_blank">
          <FaEnvelope className="m-1 p-2" fontSize="4rem" color="#ffd21d" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
