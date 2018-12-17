import React from "react";

import Sale from "../Images/sale.jpg";
import "./SideBannerAdd.css";

class SideBannerAdd extends React.Component {
  render() {
    return (
      <img className="ui large image" src={Sale} alt="sidebanneradd_image" />
    );
  }
}

export default SideBannerAdd;
