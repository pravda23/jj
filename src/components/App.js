import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Home from "./Home.component";
import Visuals from "./Visuals.component";
// import { getInsta } from "./InstaAPI.component";

function App() {
  const [volumeIcon, setVolumeIcon] = useState(false);
  const [videoMuted, setVideoMuted] = useState("muted");

  const vidUrl = "https://getjohnnyjazz.com/resources/jjsd10s.mp4";

  const setVolumeOnClick = () => {
    setVolumeIcon(!volumeIcon);
    setVideoMuted(videoMuted === "muted" ? "" : "muted");
  };

  return (
    <div className="overlay">
      <div className="app-container">
        <video
          className="video"
          src={vidUrl}
          autoPlay
          loop
          muted={videoMuted}
        />

        <div className="header-container"></div>
        <BrowserRouter>
          <div className="navbar">
            {/* <Link to="/">
              <h1 className="btn btn-outline-warning p-2 m-1 btn-lg btn-bold">
                HOME
              </h1>
            </Link>
            <Link to="/visuals">
              {" "}
              <h1 className="btn btn-outline-warning p-2 m-1 btn-lg btn-bold">
                VISUALS
              </h1>
            </Link> */}

            <div onClick={setVolumeOnClick} className="player-icon">
              {volumeIcon ? (
                <FaVolumeUp size="2rem" />
              ) : (
                <FaVolumeMute size="2rem" />
              )}
            </div>
          </div>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/visuals" element={<Visuals />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
