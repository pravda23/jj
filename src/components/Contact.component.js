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
    <div className="cta-btn">
      <h1 className="bouncer">
        <div>BOOK NOW</div>
        <div>
          <FaAngleDown />
        </div>
      </h1>
      <div className="contact-icons-container">
        <div className="contact-icon-container">
          <div>
            <a
              className="contact-icon"
              href="https://wa.link/zed59o"
              target="_blank"
            >
              <FaWhatsapp className="m-1 p-2" fontSize="6rem" />
            </a>
          </div>
          <div>WHATSAPP</div>
        </div>
        <div className="contact-icon-container">
          <div>
            <a
              className="contact-icon"
              href="mailto:hi@johnbartmann.com"
              target="_blank"
            >
              <FaEnvelope className="m-1 p-2" fontSize="6rem" />
            </a>
          </div>
          <div className="contact-icon">EMAIL</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
