import React from "react";

import "./ContactForm.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ui form">
          <div className="three field">
            <label className="label-contactform">First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
            <label className="label-contactform">Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
            <label className="label-contactform">Message</label>
            <div className="field">
              <textarea rows="4" placeholder="Write your message here..." />
            </div>
          </div>
          <div className="ui green button">Send</div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
