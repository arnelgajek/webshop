import React from "react";

import "./Footer.css";
import SocialMedia from "../Socialmedia/SocialMedia";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column">
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
