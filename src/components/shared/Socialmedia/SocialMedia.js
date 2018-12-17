import React from "react";

import Facebook from "../Facebook/Facebook";
import Instagram from "../Instagram/Instagram";
import LinkedIn from "../Linkedin/LinkedIn";
import GooglePlus from "../GooglePlus/GooglePlus";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui center aligned grid">
          <div className="one wide column">
            <Facebook />
          </div>
          <div className="one wide column">
            <Instagram />
          </div>
          <div className="one wide column">
            <LinkedIn />
          </div>
          <div className="one wide column">
            <GooglePlus />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
