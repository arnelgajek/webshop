import React from "react";

import './MainSlideRightArrow.css';

const MainSlideRightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="ui angle huge right icon" aria-hidden="true" />
    </div>
  );
};

export default MainSlideRightArrow;
