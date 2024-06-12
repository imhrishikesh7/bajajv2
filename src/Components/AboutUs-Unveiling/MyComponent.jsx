import React, { useState } from 'react';
import "./MyComponent.css";

const MyComponent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className='row data-2 about-unveil-container'>
      <div className='col-md-8 py-4 px-4 about-unveil'>
        <h1 className=''>Unveiling the legacy <br />of Bajaj Electricals</h1>
        <p className='mt-4 py-4 data-4'>
          Bajaj Electricals, a part of the $100bn multinational conglomerate Bajaj Group, is a globally renowned 
          Consumer Appliances and Lighting Solutions company. With the vision to enhance the quality of life and 
          bring happiness with sustainability, we have built our legacy on trust and excellence. 
          We have incorporated a consumer-centric approach, attuning ourselves to the evolving demands of 
          our consumers.
        </p>
      </div>
      <div className='col-md-4 position-relative'>
        {!isVideoPlaying ? (
          <>
            <img src="about_img-2.png" alt="" className="img-cover img-fluid"/>
            <button 
              className="play-button" 
              onClick={handlePlayVideo}
              style={{
                animation: 'rotateButton 1s linear infinite'
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Play Video
            </button>
          </>
        ) : (
          <video className="img-cover" controls autoPlay>
            <source src="your_video_source.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default MyComponent;