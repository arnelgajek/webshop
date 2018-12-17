import React from "react";

import "./AboutMain.css";
import Contact from "../shared/Contact/Contact";
import GoogleMap from "../shared/Googlemap/GoogleMap";
import ContactForm from "../contactform/ContactForm";

class AboutMain extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column" />
          <div className="contactform-container center aligned eight wide column">
            <ContactForm />
          </div>
          <div className="contactinfo-container center aligned eight wide column">
            <Contact />
          </div>
          <div className="about-separator map-container sixteen wide column" />
          <div className="sixteen wide column">
            <GoogleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMain;
