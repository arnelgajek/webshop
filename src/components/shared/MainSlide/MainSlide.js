import React from "react";

import './MainSlide.css';

const MainSlide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%%",
    width: "100%",
    height: "100%"
  };

  return <div className="mainSlide" style={styles} />;
};

export default MainSlide;
