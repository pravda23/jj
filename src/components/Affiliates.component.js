import ImageGallery from "react-image-gallery";

const Affiliates = () => {
  const images = [
    {
      original: "https://getjohnnyjazz.com/resources/boschlogo.png",
      originalClass: "affiliates",
      originalHeight: ".5rem",
      originalWidth: ".5rem",
    },
    {
      original: "https://getjohnnyjazz.com/resources/cavallilogo.png",
      originalClass: "affiliates",
      originalHeight: ".5rem",
      originalWidth: ".5rem",
    },
  ];

  return (
    <div className="affiliates">
      <h3>CLIENTELE</h3>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}
        showNav={false}
      />

      {/* <img
          src="https://getjohnnyjazz.com/resources/boschlogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/cavallilogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/spierlogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/lourensfordlogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/babylonlogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/jbmetlogo.png"
          alt="boschendal"
        />
        <img
          src="https://getjohnnyjazz.com/resources/kyknetlogo.png"
          alt="boschendal"
        /> */}
    </div>
  );
};

export default Affiliates;
