import React from "react";

import './MainSlideLeftArrow.css'

const MainSlideLeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="ui angle huge left icon" aria-hidden="true" />
    </div>
  );
};

export default MainSlideLeftArrow;
