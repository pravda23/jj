import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function App() {
  const [volumeIcon, setVolumeIcon] = useState(false);
  const [videoMuted, setVideoMuted] = useState("muted");

  const setVolumeOnClick = () => {
    setVolumeIcon(!volumeIcon);
    setVideoMuted(videoMuted == "muted" ? "" : "muted");
  };

  const vidUrl = "https://getjohnnyjazz.com/resources/jjvid.mp4";

  return (
    <div className="App">
      <video className="video" src={vidUrl} autoPlay loop muted={videoMuted} />
      <div className="navbar-container">
        <div>The navbar</div>
        <div onClick={setVolumeOnClick}>
          {volumeIcon ? <FaVolumeUp /> : <FaVolumeMute />}
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
        <p className="btn btn-primary btn-lg">
          <a href="mailto:music@johnbartmann.com">Book JohnnyJazz</a>
        </p>
      </div>
    </div>
  );
}
export default App;
