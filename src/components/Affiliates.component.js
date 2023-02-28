import ImageGallery from "react-image-gallery";

const Affiliates = () => {
  const images = [
    {
      original: "https://getjohnnyjazz.com/resources/boschlogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/cavallilogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/spierlogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/lourensfordlogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/babylonlogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/jbmetlogo.png",
    },
    {
      original: "https://getjohnnyjazz.com/resources/kyknetlogo.png",
    },
  ];

  const imageObjectUpdater = (i) => {
    i.map((e) => {
      e.originalClass = "affiliates";
      e.originalHeight = "100px";
      e.originalWidth = "100px";
    });
  };

  imageObjectUpdater(images);

  console.log(images);
  return (
    <div className="affiliates">
      <div className="affiliates-block">
        <h3>CLIENTELE</h3>
      </div>
      <div className="affiliates-img">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
          showNav={false}
        />
      </div>
    </div>
  );
};

export default Affiliates;
