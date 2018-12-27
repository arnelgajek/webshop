import React from "react";

import "./Contact.css";
import Address from "../Address/Address";
import PhoneNumber from "../Phonenumber/PhoneNumber";
import EmailAddress from "../Emailaddress/EmailAddress";

class Contact extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="contact-info-placeholder">
          <div className="ui container">
            <h1>CONTACT</h1>
            <div className="address column">
              <Address />
            </div>
            <br />
            <div className="phonenumber column">
              <PhoneNumber />
            </div>
            <br />
            <div className="emailaddress column">
              <EmailAddress />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
