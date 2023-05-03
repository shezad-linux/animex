import React from 'react';
import './Loading.css'
const LoadingVideo = ({ src }) => {
  return (
    <diV>
    <div className="fullscreen-bg">
      <video loop  autoPlay className="fullscreen-bg__video">
        <source src={src} type="video/mp4" />
      </video>
     
    </div>
    <div className='loader'>Loader</div>
    </diV>
  );
};

export default LoadingVideo;
