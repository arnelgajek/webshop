import React from "react";

import MainNewsBoxTitle from "../Mainnewsboxtitle/MainNewsBoxTitle";
import MainNewsBoxParagraph from "../Mainnewsboxparagraph/MainNewsBoxParagraph";
import MainNewsBoxIcon from "../Mainnewsboxicon/MainNewsBoxIcon";
import "./MainNewsBox.css";

class MainNewsBox extends React.Component {
  render() {
    return (
      <div className="twelve wide column">
        <div className="main-news-box ui raised card">
          <div className="content">
            <div className="header">
              <MainNewsBoxTitle />
            </div>
            <div className="meta">
              <span className="category">Minor description?</span>
            </div>
            <div className="description">
              <MainNewsBoxParagraph />
            </div>
            <div className="extra content">
              <div className="right floated icon">
                <MainNewsBoxIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNewsBox;
