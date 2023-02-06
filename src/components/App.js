import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function App() {
  const [volIsUp, setVolIsUp] = useState(false);
  const [volumeIcon, setVolumeIcon] = useState(false);

  const setVolumeOnClick = () => {
    setVolIsUp(!volIsUp);
    setVolumeIcon(!volumeIcon);
  };

  const vidUrl = "https://getjohnnyjazz.com/resources/jjvid.mp4";

  return (
    <div className="App">
      <video className="video" src={vidUrl} autoPlay loop muted />
      <div className="navbar-container">
        <div>The navbar</div>
        <div onClick={setVolumeOnClick}>
          {volIsUp ? <FaVolumeUp /> : <FaVolumeMute />}
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
