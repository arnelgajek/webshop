import React from "react";

import SideBannerImage from '../Sidebannerimage/SideBannerImage';
import './SideBanner.css';

class SideBanner extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SideBannerImage />
      </div>
    );
  }
}

export default SideBanner;