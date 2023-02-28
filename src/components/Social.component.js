import {
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";
const Social = () => {
  return (
    <>
      <div className="social-icons">
        <div>
          <a href="https://tiktok.com/@getjohnnyjazz" target="_blank">
            <FaTiktok className="m-1 p-2" fontSize="3rem" color="#ffd21d" />
          </a>
          <a href="https://instagram.com/getjohnnyjazz" target="_blank">
            <FaInstagram className="m-1 p-2" fontSize="3rem" color="#ffd21d" />
          </a>
          <a href="https://facebook.com/getjohnnyjazz" target="_blank">
            <FaFacebook className="m-1 p-2" fontSize="3rem" color="#ffd21d" />
          </a>
        </div>
        <div>
          <a href="https://johnbartmann.com/" target="_blank">
            © 2023 JOHN BARTMANN
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
