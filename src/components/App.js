import { Routes, Route } from "react-router-dom";
import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import About from "./About.component";
import Contact from "./Contact.component";
import Visuals from "./Visuals.component";
import Navbar from "./Navbar.component";
import Header from "./Header.component";

function App() {
  const baseUrl = "https://johnbartmann.com/getjohnnyjazz";
  const [volumeIcon, setVolumeIcon] = useState(false);
  const [videoMuted, setVideoMuted] = useState("muted");

  const vidUrl = "https://getjohnnyjazz.com/resources/jjvid.mp4";
  const setVolumeOnClick = () => {
    setVolumeIcon(!volumeIcon);
    setVideoMuted(videoMuted == "muted" ? "" : "muted");
  };

  return (
    <div className="App">
      <video className="video" src={vidUrl} autoPlay loop muted={videoMuted} />
      <div className="navbar-container">
        <Navbar />
        <div onClick={setVolumeOnClick} className="player-icon">
          {volumeIcon ? (
            <FaVolumeUp size="2rem" />
          ) : (
            <FaVolumeMute size="2rem" />
          )}
        </div>
      </div>

      <Header />
      <About />
      <Contact />
    </div>
  );
}
export default App;
