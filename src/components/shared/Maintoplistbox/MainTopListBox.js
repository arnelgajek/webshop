import React from "react";

import MainTopListBoxTitle from "../Maintoplistboxtitle/MainTopListBoxTitle";
import MainTopListBoxParagraph from "../Maintoplistboxparagraph/MainTopListBoxParagraph";
import MainTopListBoxIcon from "../Maintoplistboxicon/MainTopListBoxIcon";
import "./MainTopListBox.css";

class MainTopListBox extends React.Component {
  render() {
    return (
      <div className="twelve wide column">
        <div className="main-toplist-box ui raised card">
          <div className="content">
            <div className="header">
              <MainTopListBoxTitle />
            </div>
            <div className="meta">
              <span className="category">Minor description?</span>
            </div>
            <div className="description">
              <MainTopListBoxParagraph />
            </div>
            <div className="extra content">
              <div className="right floated icon">
                <MainTopListBoxIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTopListBox;
