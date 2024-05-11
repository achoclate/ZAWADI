import React from 'react';

const Home = () => {
  return (
    <div>
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={require('../image/video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
