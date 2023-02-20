const Visuals = () => {
  const instaId = "57626723501";
  return (
    <div>
      <div className="text-container">
        <h1>VISUALS</h1>
        <script src="https://embedsocial.com/js/iframe.js"></script>
        <iframe
          className="insta-container"
          width="100%"
          src="https://embedsocial.com/api/pro_hashtag/46e79252f9acea61c4f09393263b57c4e9a2be10"
        ></iframe>
        <script>iFrameResize();</script>
      </div>
    </div>
  );
};

export default Visuals;
