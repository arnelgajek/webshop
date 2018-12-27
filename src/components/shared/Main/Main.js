import React from "react";

import "./Main.css";
import SideBar from "../../shared/Sidebar/SideBar";
import MainTopListBox from "../Maintoplistbox/MainTopListBox";
import MainNewsBox from "../Mainnewsbox/MainNewsBox";
import MainSlider from "../MainSlider/MainSlider";

class Main extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column" />
          <div className="thirteen wide column">
            <MainSlider />
          </div>
          <div className="three wide column">
            <div className="side-banner ui raised card">
              <div className="content">
                <SideBar />
              </div>
            </div>
          </div>
          <div className="sixteen wide column">
            <MainTopListBox />
            <MainNewsBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
