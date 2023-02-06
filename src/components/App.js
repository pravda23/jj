import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function App() {
  const [volume, setVolume] = useState({
    audible: false,
    icon: false,
    video: "muted",
  });

  const setVolumeOnClick = () => {
    setVolume({
      audible: true,
      icon: true,
      video: "",
    });
  };

  const vidUrl = "https://getjohnnyjazz.com/resources/jjvid.mp4";

  return (
    <div className="App">
      <video className="video" src={vidUrl} autoPlay loop muted />
      <div className="navbar-container">
        <div>The navbar</div>
        <div onClick={setVolumeOnClick}>
          {volume ? <FaVolumeUp /> : <FaVolumeMute />}
        </div>
      </div>
      <div>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis
          alias blanditiis quas vitae, ducimus recusandae hic! Sed nihil,
          consequuntur, voluptas sint dolor sit aliquam id adipisci, beatae unde
          blanditiis.
        </p>
      </div>
      <div className="contact-container">
        <h1>Contact</h1>
        <p>Book JohnnyJazz</p>
      </div>
    </div>
  );
}
export default App;
