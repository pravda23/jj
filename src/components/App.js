import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "../styles/App.styles.scss";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Home from "./Home.component";
import Footer from "./Footer.component";
import Visuals from "./Visuals.component";

function App() {
  const [volumeIcon, setVolumeIcon] = useState(false);
  const [videoMuted, setVideoMuted] = useState("muted");

  const vidUrl = "https://getjohnnyjazz.com/resources/love720.mp4";

  const setVolumeOnClick = () => {
    setVolumeIcon(!volumeIcon);
    setVideoMuted(videoMuted === "muted" ? "" : "muted");
  };

  // let startPlayPromise = vidUrl.play();a

  // if (startPlayPromise !== undefined) {
  //   startPlayPromise.then(() => {
  //     // Start whatever you need to do only after playback
  //     // has begun.
  //   }).catch(error => {
  //     if (error.name === "NotAllowedError") {
  //       doSomethingToInformTheUser();
  //     } else {
  //       // Handle a load or playback error
  //     }
  //   });
  // }

  return (
    <div className="overlay">
      {/* <button onClick={stopPlaying}>Stop</button> */}
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
            <Link to="/">
              <h1 className="btn btn-outline-warning p-2 m-1 btn-lg btn-bold">
                HOME
              </h1>
            </Link>
            <Link to="/visuals">
              {" "}
              <h1 className="btn btn-outline-warning p-2 m-1 btn-lg btn-bold">
                VISUALS
              </h1>
            </Link>

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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
