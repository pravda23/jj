import Affiliates from "./Affiliates.component";
import Social from "./Social.component";
import Contact from "./Contact.component";

const Home = () => {
  return (
    <div>
      <div className="text-container">
        <p>
          Multi-instrumental live electronic musician and event DJ. Get
          JohnnyJazz!
        </p>
      </div>
      <Contact />
      <Affiliates />
      <Social />
    </div>
  );
};

export default Home;
