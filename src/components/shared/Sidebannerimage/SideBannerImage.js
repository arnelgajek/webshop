import React from "react";

import iPadPro from "../Images/iPadPro.png";
import iPhoneX from "../Images/iPhoneX.png";
import iMac from "../Images/iMac.png";
import SideBannerTitle from "../Sidebannertitle/SideBannerTitle";
import './SideBannerImage.css';

class SideBannerImage extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SideBannerTitle />
        <br />
        <div className="ui top aligned">
          <img className="ui centered small image" src={iPadPro} alt="sidebanner_image" />
          <br />
          <br />
        </div>
        <div className="ui middle aligned">
          <img className="ui centered small image" src={iPhoneX} alt="sidebanner_image" />
        </div>
        <br />
        <br />
        <div className="ui bottom aligned">
          <img className="ui centered  small image" src={iMac} alt="sidebanner_image" />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default SideBannerImage;
