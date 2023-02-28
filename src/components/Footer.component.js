import Social from "./Social.component";
import Affiliates from "./Affiliates.component";
import Contact from "./Contact.component";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="cta-btn">
          <Contact />
        </div>
        <div className="affiliates">
          <Affiliates />
        </div>
      </div>

      <Social />
    </>
  );
};

export default Footer;
